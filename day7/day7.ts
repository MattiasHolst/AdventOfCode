const input = await Deno.readTextFile("./day7Input.txt");

const splitInput = input.split("\r\n");

let dir = [];
const count = new Map<string, number>;
let totalFileSize = 0;

for (let i = 0; i <= splitInput.length; i++) {
    const row = splitInput[i] && splitInput[i].split(' ');
    if (row) {
        if (row[2] === '..') dir.pop();
        else if (row[2] === '/') dir = [];
        else if (row[2] !== undefined) dir.push(row[2]);
        if(+row[0]){
            let str = '';
            for (let j = 0; j < dir.length; j++) {
                str += (dir[j] + '/');
                if (count.get(str)) {
                    let currentValue = count.get(str)
                    if (currentValue) {
                        currentValue += +row[0]
                        count.set(str, currentValue)
                    }
                } else {
                    count.set(str, +row[0]);
                }
            }
    
            totalFileSize += +row[0];
        }
        
    }
}

const totalDiscSpace = 70000000;
const unusedSpace = 30000000
const spaceNeeded = unusedSpace - (totalDiscSpace - totalFileSize);



let total = 0;
const star1 = () => {
    for (const value of count.values()) {
        if (value <= 100000) total += value;
    }
    console.log('Star 1 : ', total);
}

const star2 = () => {
    const folders = [];
    for (const value of count.values()) {
        if (value > spaceNeeded) {
            folders.push(value);
        }
    }
    console.log('Star 2 : ', Math.min(...folders));
}

star1();
star2();




