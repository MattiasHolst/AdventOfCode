const day1Input = await Deno.readTextFile("./day8Input.txt");

const rows = day1Input.split("\n");

const part1 = () => {
    let steps = 0;
    
    const rightLeftInstructionsString = rows[0];
    const rightLeftInstructions = rightLeftInstructionsString.split('');

    //Slicing array to get the puzzle input
    const routes = rows.slice(2);
    let i = 0;
    //Get AAA index
    routes.forEach((route,rowIndex) => {
        const nextStartPoint = route.split('=')[0].trim();
        if(nextStartPoint==='AAA'){
            i = rowIndex;
        }
    })
    let done = false;
    for(i=i; i<=routes.length;){
        if(done){
            break;
        }
        rightLeftInstructions.forEach((instruction) => {
            let nextIteration = false;
            let leftValue:string;
            let rightValue:string;
            switch(instruction){
                case "L":
                    leftValue = routes[i].split('=')[1].split(',')[0].replace('(','').trim();

                    
                    //Move to startPoint === leftValue
                    routes.forEach((route,rowIndex) => {
                        const nextStartPoint = route.split('=')[0].trim();
                        if(nextStartPoint===leftValue){
                            i = rowIndex;
                            steps++;
                            
                            nextIteration = true;
                            if(nextStartPoint==='ZZZ'){
                                done=true
                            }
                            
                            return;
                        }
                    })
                    break
                case "R":
                    rightValue = routes[i].split('=')[1].split(',')[1].replace(')','').trim();
                    routes.forEach((route,rowIndex) => {
                        const nextStartPoint = route.split('=')[0].trim();
                        
                        if(nextStartPoint===rightValue){
                            i = rowIndex;
                            steps++;
                            nextIteration = true;
                            if(nextStartPoint==='ZZZ'){
                                done=true
                            }

                            return;
                        }
                    })
                    break
                default:
                    break
            }
            if(nextIteration){
                return
            }
        })
    }

    return steps
}
console.log(part1());
