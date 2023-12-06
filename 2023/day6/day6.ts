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


console.log(part1());


/*
Hold the button for 0 milliseconds, it will have traveled 0 millimeters
Hold the button for 1 milliseconds, travel at a speed of 1 millimeters per millisecond for 6 milliseconds, reaching a total distance of 6 millimeters.
Hold the button for 2 milliseconds, travel at a speed of 2 millimeters per millisecond for 5 milliseconds, reaching a total distance of 10 millimeters.
Hold the button for 3 milliseconds, travel at a speed of 3 millimeters per millisecond for 4 milliseconds, reaching a total distance of 12 millimeters.
Hold the button for 4 milliseconds, travel at a speed of 4 millimeters per millisecond for 3 milliseconds, reaching a total distance of 12 millimeters.
Hold the button for 5 milliseconds, travel at a speed of 5 millimeters per millisecond for 2 milliseconds, reaching a total distance of 10 millimeters.
Hold the button for 6 milliseconds, travel at a speed of 6 millimeters per millisecond for 1 milliseconds, reaching a total distance of 6 millimeters,
Hold the button for 7 milliseconds, reach 0


*/ 

