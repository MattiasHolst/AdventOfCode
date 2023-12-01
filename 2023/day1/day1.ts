const day1Input = await Deno.readTextFile("./day1Input.txt");

const splittedInput = day1Input.split("\n\n");

const stringNumbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const part1 = () => {
  let totalSum = 0;
  splittedInput.forEach((line) => {
    const myNewInput = line.split("\n");
    myNewInput.forEach((foo) => {
      const myNumbers = foo.match(/\d+/g);
      if (myNumbers) {
        const firstPart = myNumbers[0];
        const secondPart = myNumbers[myNumbers?.length - 1];
        const firstNumber = firstPart[0];
        const lastNumber = secondPart[secondPart.length - 1];
        const together = firstNumber + lastNumber;
        totalSum += +together;
      }
    });
  });
  return totalSum;
};

const part2 = () => {
  
};

const totalSumPart1 = part1();
// const totaltSumPart2 = part2();

console.log("my rowSum : ", totalSumPart1);
