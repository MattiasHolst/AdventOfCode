const day1Input = await Deno.readTextFile('./day1Input.txt');

const splittedInput = day1Input.split('\n\n');

const elfCalorieArray = splittedInput.map(line => line.split('\n'))

const sumElfCaloriesArray = elfCalorieArray.map(cookieCalorie => cookieCalorie.reduce((acc, curr) => acc + +curr, 0))

const sortedHighestToLowest = sumElfCaloriesArray.sort((a, b) => b-a);

const max = Math.max(...sumElfCaloriesArray);
const sum = sortedHighestToLowest[0]+sortedHighestToLowest[1]+sortedHighestToLowest[2];

console.log(max);
console.log(sum);


