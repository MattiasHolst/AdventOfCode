const input = await Deno.readTextFile("./day2Input.txt");

const splittedInput = input.split("\n");




const part1 = () => {
  let gameIDs = 0;
  splittedInput.map((row) => {
    //Split the row for all rounds by ;
    const game = row.split(':');
    const gameID = game[0].split(' ')[1];
    const rounds = game[1].split(';')
    let possibleRound = true;
    rounds.forEach((round) => {
      const myRound =  round.replace(/(\r\n|\n|\r)/gm, "");
      if(!possibleRound) return
      const colors = myRound.split(',');
      colors.forEach((color) => {
        if(!possibleRound) return
        const splittedColor = color.split(' ');
        if(splittedColor[2] === 'red'){
          if(+splittedColor[1] > 12){
            possibleRound = false;
          }
        }else if(splittedColor[2] === 'green'){
          if(+splittedColor[1] > 13){
            possibleRound = false;
          }
        }else if(splittedColor[2] === 'blue'){
          if(+gameID === 40){
            console.log(splittedColor[1]);
          }
          if(+splittedColor[1] > 14){
            possibleRound = false;
          }
        }
      })
    })
    if(possibleRound){
      console.log('gameIDs : ', gameIDs + " adding : ", gameID);
      gameIDs += +gameID
    }
  })
  return gameIDs
};

const part2 = () => {
  let sum = 0;
  splittedInput.map((row) => {
    //Split the row for all rounds by ;
    const game = row.split(':');
    const rounds = game[1].split(';')
    let redCubes = 0;
      let greenCubes = 0;
      let blueCubes = 0;
    rounds.forEach((round) => {
      const myRound =  round.replace(/(\r\n|\n|\r)/gm, "");
      const colors = myRound.split(',');
      
      colors.forEach((color) => {
        const splittedColor = color.split(' ');
        if(splittedColor[2] === 'red'){
          if(+splittedColor[1] > redCubes){
            redCubes = +splittedColor[1];
          }
        }else if(splittedColor[2] === 'green'){
          if(+splittedColor[1] > greenCubes){
            greenCubes = +splittedColor[1];
          }
        }else if(splittedColor[2] === 'blue'){
          if(+splittedColor[1] > blueCubes){
            blueCubes = +splittedColor[1];
          }
        }
      })

    })
    const allCubes = redCubes * greenCubes * blueCubes;
    sum += allCubes;
  })
  return sum
};

const star1Answer = part1();
console.log(star1Answer);

const star2Answer = part2();
console.log(star2Answer);


