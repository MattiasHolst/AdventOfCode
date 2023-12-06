const day1Input = await Deno.readTextFile("./day6Input.txt");

const rows = day1Input.split("\n");

const part1 = () => {
    let totalSum = 0;
    
    const times = rows[0].split(':')[1].replace(/(\r\n|\n|\r)/gm, "").split(" ");

    const distances = rows[1].split(':')[1].replace(/(\r\n|\n|\r)/gm, "").split(" ");

    //remove non number elements 
    const filteredTimes = times.filter((time)=> +time && time)
    const filteredDistances = distances.filter((distance)=> +distance && distance)
    
    filteredTimes.forEach((time,index) => {
        let numberOfWays = 0;
        const distance = filteredDistances[index];

        for(let i = 0; i<=+time; i++){
            const timeToMove = +time-i;
            const distanceByClick = i*timeToMove;
            if(distanceByClick > +distance){
                numberOfWays++;
            }

        }
        if(totalSum===0){

            totalSum = numberOfWays
        }else{
            totalSum = totalSum*numberOfWays;
        }
    })
    return totalSum
}


const part2 = () => {
    let totalSum = 0;
    
    const times = rows[0].split(':')[1].replace(/(\r\n|\n|\r)/gm, "").split(" ");

    const distances = rows[1].split(':')[1].replace(/(\r\n|\n|\r)/gm, "").split(" ");

    //remove non number elements 
    const filteredTimes = times.filter((time)=> +time && time)
    const filteredDistances = distances.filter((distance)=> +distance && distance)
    //add all numbers together
    const timesTogether = filteredTimes.reduce((prev,curr)=> prev+curr);
    const distancesTogether = filteredDistances.reduce((prev,curr)=> prev+curr);

    let numberOfWays = 0;

        for(let i = 0; i<=+timesTogether; i++){
            const timeToMove = +timesTogether-i;
            const distanceByClick = i*timeToMove;
            if(distanceByClick > +distancesTogether){
                numberOfWays++;
            }

        }

    totalSum = numberOfWays

    return totalSum;
    
}

console.log(part1());
console.log(part2());
