const day1Input = await Deno.readTextFile("./day4Input.txt");

const splittedInput = day1Input.split("\n");

const part1 = () => {
    let totalSum = 0;
    splittedInput.forEach((row) => {
        //split after : to remove card
        const card = row.split(':');
        //Split after | to compare the values
        const rounds = card[1].split('|');
        rounds[1] =  rounds[1].replace(/(\r\n|\n|\r)/gm, "");
        const winningNumbers = rounds[0].split(' ');
        const myNumbers = rounds[1].split(' ');
        let gamePoints = 0;
        myNumbers.forEach((myNumber) => {
            
            if(winningNumbers.includes(myNumber)){
                if(myNumber === ''){
                    return
                }
                if(gamePoints===0){
                    
                    gamePoints++;
                }else{
                    
                    gamePoints = gamePoints*2
                }
            }
        })
    
        totalSum += gamePoints;
    
        
    })
    return totalSum
}

console.log(part1());



