const day1Input = await Deno.readTextFile('./day2Input.txt');

const splittedInput = day1Input.split('\n');

let part1Score = 0;

/* PART 1 */

splittedInput.forEach((round)=>{
    switch (round[0]) {
        //Computer Rock
        case 'A':
            computerRock(round[2]);
            break
        //Computer paper
        case 'B':
            computerPaper(round[2]);
            break
        //Computer scissors
        case 'C':
            computerScissors(round[2]);
            break
        default:

    }
    
});
console.log('PART 1',part1Score);
let part2Score = 0;
/* PART 2 */

splittedInput.forEach((round)=>{
    switch (round[0]) {
        
        //Computer Rock
        case 'A':
            computerRockPart2(round[2]);
            break
        //Computer paper
        case 'B':
            computerPaperPart2(round[2]);
            break
        //Computer scissors
        case 'C':
            computerScissorsPart2(round[2]);
            break
        default:

    }
    
}); 

console.log('PART 2', part2Score)
function computerRock(playerChoice: string){
    //Player chooses Rock
    if(playerChoice==='X') part1Score += 4
    //Player chooses paper
    if(playerChoice==='Y') part1Score += 8
    //Player chooses scissors
    if(playerChoice==='Z') part1Score += 3
}

function computerPaper(playerChoice: string){
    //Player chooses Rock
    if(playerChoice==='X') part1Score += 1
    //Player chooses paper
    if(playerChoice==='Y') part1Score += 5
    //Player chooses scissors
    if(playerChoice==='Z') part1Score += 9
}

function computerScissors(playerChoice: string){
    //Player chooses Rock
    if(playerChoice==='X') part1Score += 7
    //Player chooses paper
    if(playerChoice==='Y') part1Score += 2
    //Player chooses scissors
    if(playerChoice==='Z') part1Score += 6
}
function computerRockPart2(playerChoice: string){
    //Player needs to lose - Rock beats scissor(3+0)
    if(playerChoice==='X') part2Score += 3
    //Player needs to draw - Rock draws with Rock(1+3)
    if(playerChoice==='Y') part2Score += 4
    //Player needs to win - Rock beaten by paper(2+6)
    if(playerChoice==='Z') part2Score += 8
}
function computerPaperPart2(playerChoice: string){
    //Player needs to lose - Paper beats rock(1+0)
    if(playerChoice==='X') part2Score += 1
    //Player needs to draw - Paper draws with Paper(2+3)
    if(playerChoice==='Y') part2Score += 5
    //Player beeds to win - Paper beaten by Scissors(3+6)
    if(playerChoice==='Z') part2Score += 9
}
function computerScissorsPart2(playerChoice: string){
    //Player needs to lose - Scissors beats Paper(2+0)
    if(playerChoice==='X') part2Score += 2
    //Player needs to draw - Scissors draws with Scissors(3+3)
    if(playerChoice==='Y') part2Score += 6
    //Player needs to win - Scissors beaten by Rock(1+6)
    if(playerChoice==='Z') part2Score += 7
}
