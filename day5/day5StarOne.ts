const input = await Deno.readTextFile('./day5Input.txt');

const splittedInput = input.split('\n');

const crates = new Map<number, string[]>
crates.set(1, ['F', 'C', 'J', 'P', 'H', 'T', 'W']);
crates.set(2, ['G', 'R', 'V', 'F', 'Z', 'J', 'B', 'H']);
crates.set(3, ['H', 'P', 'T', 'R']);
crates.set(4, ['Z', 'S', 'N', 'P', 'H', 'T']);
crates.set(5, ['N', 'V', 'F', 'Z', 'H', 'J', 'C', 'D']);
crates.set(6, ['P', 'M', 'G', 'F', 'W', 'D', 'Z']);
crates.set(7, ['M', 'V', 'Z', 'W', 'S', 'J', 'D', 'P']);
crates.set(8, ['N', 'D', 'S']);
crates.set(9, ['D', 'Z', 'S', 'F', 'M']);

const star1 = () => {
    for (let i = 10; i <= splittedInput.length - 1; i++) {
        const row = splittedInput[i].split(' ');
        const fromCrate = crates.get(+row[3]);
        const toCrate = crates.get(+row[5]);
        for (let j = 0; j < +row[1]; j++) {
            const myLetter = fromCrate?.pop();
            myLetter && toCrate?.push(myLetter);
            fromCrate && crates.set(+row[2], fromCrate);
            toCrate && crates.set(+row[5], toCrate);
        }
    }
    console.log('First star:',crates);
}

const star2 = () => {
    for (let i = 10; i <= splittedInput.length - 1; i++) {
        const row = splittedInput[i].split(' ');
        const fromCrate = crates.get(+row[3]);
        const toCrate = crates.get(+row[5]);
        const myLetterArray = [];
        for (let j = 0; j < +row[1]; j++) {
            const myLetter = fromCrate?.pop();
            myLetter && myLetterArray.push(myLetter);
        }
        for (let j = myLetterArray.length-1; j>=0; j--){
            myLetterArray[j] && toCrate?.push(myLetterArray[j]);
            fromCrate && crates.set(+row[2], fromCrate);
            toCrate && crates.set(+row[5], toCrate);
        }
        
    }
    console.log('Second star:',crates);
}
star1();
star2();