const day1Input = await Deno.readTextFile('./day4Input.txt');

const splittedInput = day1Input.split('\n');
let count = 0;
splittedInput.forEach((row) => {
    const sections = row.split(',');
    const sectionOne = sections[0].split('-');
    const sectionTwo = sections[1].split('-');

    if(+sectionOne[1]>=+sectionTwo[0] && +sectionOne[1]<=+sectionTwo[1]){
        count++
    }else if(+sectionOne[0]<=+sectionTwo[1] && +sectionOne[1]>=+sectionTwo[1]){
        count++
    }
});

console.log(count);