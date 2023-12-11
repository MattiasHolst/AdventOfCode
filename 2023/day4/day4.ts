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

const part2 = () => {
    const cards: Record<number, number> = {}
    splittedInput.map((_v,i) => i).forEach(v => cards[v] = 1)
   //split after : to remove card
   splittedInput.forEach((row,rowIndex) => {
        const card = row.split(':');
        //Split after | to compare the values
        const rounds = card[1].split('|');
        rounds[1] =  rounds[1].replace(/(\r\n|\n|\r)/gm, "");
        const winningNumbers = rounds[0].split(' ').filter(value => value !== '');
        const myNumbers = rounds[1].split(' ').filter(value => value !== '');
        
        const myWinningNumbers = myNumbers.filter(myNumber => winningNumbers.includes(myNumber))
        myWinningNumbers.forEach((_number, i) => {
            cards[+rowIndex + i + 1] = cards[+rowIndex + i + 1] + 1 * cards[+rowIndex]
        })

        
   });
   const totalSum = Object.values(cards).reduce((acc,curr) => acc +=curr);
   return totalSum;
   
}

// console.log(part1());
console.log(part2());



