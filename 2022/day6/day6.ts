const input = await Deno.readTextFile("./day6Input.txt");

const splittedInput = input.split("");

const star1 = () => {
  for (let i = 0; i < splittedInput.length; i++) {
    const myStringArray = splittedInput.slice(i, i + 4);
    let myString = "";
    myStringArray.forEach((string) => (myString += string));

    if (isUnique(myString)) {
      console.log('Star 1:',myString);
      console.log('Star 1:',i + 4);
      break;
    }
  }
};

const star2 = () => {
  for (let i = 1360; i < splittedInput.length; i++) {
    const myStringArray = splittedInput.slice(i, i + 14);
    let myString = "";
    myStringArray.forEach((string) => (myString += string));
    if (isUnique(myString)) {
      console.log('Star 2:',myString);
      console.log('Star 2:',i + 14);
      break;
    }
  }
};

function isUnique(str: string) {
  return new Set(str).size == str.length;
}

star1();

star2();
