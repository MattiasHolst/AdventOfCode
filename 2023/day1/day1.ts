const day1Input = await Deno.readTextFile("./day1Input.txt");

const splittedInput = day1Input.split("\n");



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
  const stringNumbers = ["one","two","three","four","five","six","seven","eight","nine",];
  let totalSum = 0;
  splittedInput.forEach((input) => {
    const foundNumbers: number[] = [];
    let fromStart = ""
      for(let i = 0; i < input.length; i++) {
        
      const myInput =  input[i].replace(/(\r\n|\n|\r)/gm, "");
          if(+myInput) {
              foundNumbers.push(+myInput)
              break;
          }
          fromStart = fromStart + myInput;
          const foundNumber = stringNumbers.find((num) => fromStart.match(RegExp(`${num}`)))
          if(foundNumber) {
              foundNumbers.push(stringNumbers.indexOf(foundNumber) + 1)
              break;
          }
          
      }
      let fromEnd = "";
      for(let i = input.length-1; i > 0; i--) {
        const myInput =  input[i].replace(/(\r\n|\n|\r)/gm, "");
          if(+myInput) {
              foundNumbers.push(+myInput)
              break;
          }
          fromEnd = myInput + fromEnd;
          const foundNumber = stringNumbers.find((num) => fromEnd.match(RegExp(`${num}`)))
          if(foundNumber) {
              foundNumbers.push(stringNumbers.indexOf(foundNumber) + 1)
              break;
          }
  
      }
      const first = foundNumbers[0];
      const last = foundNumbers[foundNumbers.length - 1];
      
      totalSum += +`${first}${last}`
  })
  
    return totalSum
};


console.log(part1())
console.log(part2());
