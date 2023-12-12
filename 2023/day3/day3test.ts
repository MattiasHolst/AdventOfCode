const day3Input = await Deno.readTextFile("./day3Input.txt");

const getCords = (rows: string[]) => {
  const symbols: Record<string,string> = {}
  const numbers = [{number: '', cords: ['']}]
  rows.forEach((row, y) => {
    let currentNumber = {number:'', cords:['']}
    
    const exit = () => {
      if (currentNumber) {
        numbers.push({ number: currentNumber.number, cords: currentNumber.cords })
        currentNumber = {number:'', cords:[]}
      }
    }
    
    for (let x = 0; x < row.length; x++) {
      let character = row[x]
      const cords = `${x},${y}`
      if (character === ".") {
        exit()
        continue
      }
      if (['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ':', ';', '<', '>', ',', '?', '~', '`', '-', '=', '/']
        .includes(character)) {
          exit()
          if (character === '*') symbols[cords] = character
          continue
        }
      if (isNaN(Number(character))) console.log('found unknown symbol', character)
      if (!currentNumber) currentNumber = { number: '', cords: [] }
      currentNumber.number += character
      currentNumber.cords.push(cords)
    }
    exit()
  })

  return [symbols, numbers]
}

const findGears = (symbols: Record<string, string>,numbers: Record<string, string>) => numbers
  .reduce((gears:Record<string, string>[], { number = '', cords = ['']}) => {

    const adjacentSymbols = new Set([''])
    cords.forEach(cord => {
      const [x, y] = cord.split(',').map(Number)
      const adjacentCords = [
        [x-1, y-1], 
        [x-1, y],
        [x-1, y+1],
        [x, y-1],
        [x, y+1],
        [x+1, y-1],
        [x+1, y],
        [x+1, y+1]
      ]
      
      adjacentCords
        .forEach(([symbolX, symbolY]) => {
          const cords = `${symbolX},${symbolY}`
          const found = symbols[cords]
          if (found) adjacentSymbols.add(cords)
        })
    })
    
    if (adjacentSymbols.size > 0) {
      [...adjacentSymbols]
        .forEach(symbol => {
        if (!gears[symbol]) gears[symbol] = []
        gears[symbol].push(number)
        })
    }
    return gears 
  }, {})

const run = (input: string) => {
  const rows = input.split("\n")
  const [symbols, numbers] = getCords(rows)
  const gears = findGears(symbols, numbers)
  return Object.values(gears).reduce((acc, gear) => {
    if (gear.length !== 2) return acc
    acc += Number(gear[0]) * Number(gear[1])
    console.log('acc is : ', acc);
    return acc
  }, 0)
}

console.log(run(day3Input))