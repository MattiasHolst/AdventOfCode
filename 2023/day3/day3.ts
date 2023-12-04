const day1Input = await Deno.readTextFile("./day3Input.txt");

const splittedInput = day1Input.split("\n");

const regex = /[-!$%^&*@()_+|~=`#{}\[\]:";'<>?\/]/;

const regexStar2 = /[*]/;

const part1 = () => {
    let sum = 0;
    splittedInput.forEach((row, rowIndex) => {
        const rowSplit = row.split('');
        for(let i = 0; i < rowSplit.length; i++)
        {
            let addedPart = false;
            let number = '';
            if(+rowSplit[i]){
                
                if(rowSplit[i+2]==='0' || +rowSplit[i+2]){
                    if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                        number = rowSplit[i] + rowSplit[i+1] + rowSplit[i+2];
                    }else{
                        number = rowSplit[i];
                    }
                } 
                else if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                    
                    number = rowSplit[i] + rowSplit[i+1];
                    
                }else{
                    
                    number = rowSplit[i];
                }
                //Check if symbol is after or before 
                if(rowSplit[i-1] && rowSplit[i-1].match(regex)){
                    if(!addedPart){
                        sum += +number
                    }
                    addedPart = true;
                }
                if(rowSplit[i+number.length] && rowSplit[i+number.length].match(regex)){
                    
                    if(!addedPart){
                        sum += +number
                    }
                    addedPart = true;
                }
    
                //Check if row after got a symbol on diagonaly
                if(splittedInput[rowIndex+1]){
                    const nextRowSplit = splittedInput[rowIndex+1].split('');
                    if(number.length === 1){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        
                    }
    
                    if(number.length === 2){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                    }
    
                    if(number.length === 3){
                       
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+3]){
                            if(nextRowSplit[i+3].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                    }
                    
                    
                }
    
                if(splittedInput[rowIndex-1]){
    
                    const nextRowSplit = splittedInput[rowIndex-1].split('');
                    if(number.length === 1){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        
                    }
    
                    if(number.length === 2){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                    }
    
                    if(number.length === 3){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i+3]){
                            if(nextRowSplit[i+3].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i].match(regex)){
                                if(!addedPart){
            
                                    sum += +number
                                }
                                addedPart = true;
                            }
                        }
                    }
                    
                    
                }
    
    
                if((rowSplit[i+1] === '0' || rowSplit[i+2] === '0') || (+rowSplit[i+1] && +rowSplit[i+2])){
                    i += 2
                }else if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                    i += 1
                    
                }
                
    
                
            }
        }
    })
    return sum
}

const part2 = () => {
    let sum = 0;
    const combinationNumbers = ['']
    let numbersExist = false;
    splittedInput.forEach((row, rowIndex) => {
        const rowSplit = row.split('');
        for(let i = 0; i < rowSplit.length; i++)
        {
            let check2ndRow = false;
            let checkPre2ndRow = false;
            let number = '';
            let secondNumber = '';
            let gearIndex = 0;
            let numberOfAdjecentNumbers = 0;
            
            if(+rowSplit[i]){
                
                if(rowSplit[i+2]==='0' || +rowSplit[i+2]){
                    if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                        number = rowSplit[i] + rowSplit[i+1] + rowSplit[i+2];
                    }else{
                        number = rowSplit[i];
                    }
                } 
                else if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                    
                    number = rowSplit[i] + rowSplit[i+1];
                    
                }else{
                    
                    number = rowSplit[i];
                }
                //Check if symbol is after or before 
                if(rowSplit[i-1] && rowSplit[i-1] === '*'){
                    gearIndex = +rowSplit[i-1]
                    if(rowSplit[i-4]==='0' || +rowSplit[i-4]){
                        if(rowSplit[i-3] === '0' || +rowSplit[i-3]){
                            if(rowSplit[i-2] === '0' || +rowSplit[i-2]){
                                secondNumber = rowSplit[i-2] + rowSplit[i-3] + rowSplit[i-4];
                            }else{
                                secondNumber = rowSplit[i-3] + rowSplit[i-4];
                            }
                        }else{
                            secondNumber = rowSplit[i-4];
                        }
                    } 
                    else if(rowSplit[i-3] === '0' || +rowSplit[i-3]){
                        if(rowSplit[i-2] === '0' || +rowSplit[i-2]){
                            secondNumber = rowSplit[i-2] + rowSplit[i-3] + rowSplit[i-4];
                        }else{
                            secondNumber = rowSplit[i-3] + rowSplit[i-4];
                        }
                    }
                    else if(rowSplit[i-2] === '0' || +rowSplit[i-2]){
                        secondNumber = rowSplit[i-2] + rowSplit[i-3] + rowSplit[i-4];
                    }else{
                        secondNumber = rowSplit[i-3] + rowSplit[i-4];
                    }
                    if(splittedInput[rowIndex+1]){
                        const nextRowSplit = splittedInput[rowIndex+1].split('');
                    
                        if(number.length === 1){
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i]){
                                if(nextRowSplit[i] === '*'){
                                    gearIndex = i;
                                   check2ndRow = true;
                                }
                            }
                            
                        }
        
                        if(number.length === 2){
                            
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+2]){
                                if(nextRowSplit[i+2] === '*'){
                                    gearIndex = i+2;
                                   check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i]){
                                
                                if(nextRowSplit[i] === '*'){
                                   
                                    gearIndex = i;
                                    
                                   check2ndRow = true;
                                }
                            }
                        }
        
                        if(number.length === 3){
                           
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+2]){
                                if(nextRowSplit[i+2] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+3]){
                                if(nextRowSplit[i+3] === '*'){
                                    gearIndex = i+3;
                                    check2ndRow= true
                                }
                            }
                            if(nextRowSplit[i]){
                                if(nextRowSplit[i] === '*'){
                                    gearIndex = i;
                                    check2ndRow = true;
                                }
                            }
                        }
                        
                        if(check2ndRow){
                            
                            if(splittedInput[rowIndex+1]){
                                
                                const nextRowSplit = splittedInput[rowIndex+1].split('');
                                
                                if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                    if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                       
                                        if(+nextRowSplit[gearIndex-3] || nextRowSplit[gearIndex-3] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-3] + nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                        }else{
                                            
                                            if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                            if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex-1]
                                        }
                                    }
                                }else if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                    if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                        if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                        }else{
                                            if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                            if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex]
                                        }
                                    }
                                }else if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                    if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                        if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }else{
                                            if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                            if(+nextRowSplit[gearIndex+3] || nextRowSplit[gearIndex+3] === '0'){
                                                secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2] + nextRowSplit[gearIndex+3]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex+1]
                                        }
                                    }
                                }
                                const numbers = number+secondNumber;
                                combinationNumbers.forEach((myNumber) => {
                                    if (myNumber === numbers){
                                        //console.log('number already exist : ', numbers);
                                        numbersExist = true;
                                    }
                                })
                                if(!numbersExist){
                                    if(+number && +secondNumber){
                                    
                                    
                                    if(nextRowSplit[gearIndex] === '.'){
                                        
                                        if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                        && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                            numberOfAdjecentNumbers++;
                                        }
    
                                    }
                                    if(nextRowSplit[gearIndex] === '*'){
                                        
                                        if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                        && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                            numberOfAdjecentNumbers++;
                                        }
    
                                    }
                                        
                                    
                                        if(numberOfAdjecentNumbers===0){
                                            combinationNumbers.push(numbers);
                                            //console.log('adding number and secondnumber vertically : ', number, secondNumber);
                                            sum += +number * +secondNumber;
                                        }
                                    }
                                }else{
                                    //console.log('combination number already exists number s: ', number + " second number :", secondNumber);
                                    
                                    numbersExist = false;
                                }
                            }
    
                            
                            
                        }
                    }

                    if(splittedInput[rowIndex-1]){
                        const nextRowSplit = splittedInput[rowIndex-1].split('');
                        
                        if(number.length === 1){
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i]){
                                if(nextRowSplit[i] === '*'){
                                    gearIndex = i;
                                   check2ndRow = true;
                                }
                            }
                            
                        }
        
                        if(number.length === 2){
                            
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+2]){
                                if(nextRowSplit[i+2] === '*'){
                                    gearIndex = i+2;
                                   check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i]){
                                
                                if(nextRowSplit[i] === '*'){
                                   
                                    gearIndex = i;
                                    
                                   check2ndRow = true;
                                }
                            }
                        }
        
                        if(number.length === 3){
                           
                            if(nextRowSplit[i-1]){
                                if(nextRowSplit[i-1] === '*'){
                                    gearIndex = i-1;
                                    check2ndRow = true
                                }
                            }
                            if(nextRowSplit[i+1]){
                                if(nextRowSplit[i+1] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+2]){
                                if(nextRowSplit[i+2] === '*'){
                                    gearIndex = i+1;
                                    check2ndRow = true;
                                }
                            }
                            if(nextRowSplit[i+3]){
                                if(nextRowSplit[i+3] === '*'){
                                    gearIndex = i+3;
                                    check2ndRow= true
                                }
                            }
                            if(nextRowSplit[i]){
                                if(nextRowSplit[i] === '*'){
                                    gearIndex = i;
                                    check2ndRow = true;
                                }
                            }
                        }
                        if(rowIndex === 14){
                            console.log('my number is : ', number);
                            console.log('nextRowSplit : ', nextRowSplit);
                        }
                        if(check2ndRow){
                            
                            if(splittedInput[rowIndex-1]){
                                
                                const nextRowSplit = splittedInput[rowIndex+1].split('');
                                
                                if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                    if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                       
                                        if(+nextRowSplit[gearIndex-3] || nextRowSplit[gearIndex-3] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-3] + nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                        }else{
                                            
                                            if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                            if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex-1]
                                        }
                                    }
                                }else if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                    if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                        if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                        }else{
                                            if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                            if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex]
                                        }
                                    }
                                }else if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                    if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                        if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }else{
                                            if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                            }
                                        }
                                    }else{
                                        if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                            if(+nextRowSplit[gearIndex+3] || nextRowSplit[gearIndex+3] === '0'){
                                                secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2] + nextRowSplit[gearIndex+3]
                                            }else{
                                                secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                            }
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex+1]
                                        }
                                    }
                                }
                                const numbers = number+secondNumber;
                                combinationNumbers.forEach((myNumber) => {
                                    if (myNumber === numbers){
                                        //console.log('number already exist : ', numbers);
                                        numbersExist = true;
                                    }
                                })
                                if(!numbersExist){
                                    if(+number && +secondNumber){
                                    
                                    
                                    if(nextRowSplit[gearIndex] === '.'){
                                        
                                        if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                        && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                            numberOfAdjecentNumbers++;
                                        }
    
                                    }
                                    if(nextRowSplit[gearIndex] === '*'){
                                        
                                        if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                        && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                            numberOfAdjecentNumbers++;
                                        }
    
                                    }
                                        
                                    
                                        if(numberOfAdjecentNumbers===0){
                                            combinationNumbers.push(numbers);
                                            //console.log('adding number and secondnumber vertically : ', number, secondNumber);
                                            sum += +number * +secondNumber;
                                        }
                                    }
                                }else{
                                    //console.log('combination number already exists number s: ', number + " second number :", secondNumber);
                                    
                                    numbersExist = false;
                                }
                            }
    
                            
                            
                        }
                    }
                    
                    
                        
                }
                if(rowSplit[i+number.length] && rowSplit[i+number.length] === '*'){
                    gearIndex = i+number.length;
                    if(+rowSplit[i+number.length+1]){
                        if(rowSplit[i+number.length+2] === '0' || +rowSplit[i+number.length+2]){
                            if(rowSplit[i+number.length+3] === '0' || +rowSplit[i+number.length+3]){
                                secondNumber = rowSplit[i+number.length+1] + rowSplit[i+number.length+2] + rowSplit[i+number.length+3];
                            }else{
                                secondNumber = rowSplit[i+number.length+1] + rowSplit[i+number.length+2];
                            }
                        }else{
                            secondNumber = rowSplit[i+number.length+1];
                        }
                    }
                    const numbers = number+secondNumber;
                    combinationNumbers.forEach((myNumber) => {
                        if (myNumber === numbers){
                            console.log('numbers already exist : ', numbers)
                            numbersExist = true;
                        }
                    })
                    if(!numbersExist){
                        
                        if(+number && +secondNumber){
                            
                        //check that number doesnt have adjacent numbers
                        if(splittedInput[rowIndex-1]){
                            const nextRowSplit = splittedInput[rowIndex-1].split('');
                            if(+nextRowSplit[i+number.length+1]){
                                if(nextRowSplit[i+number.length+2] === '0' || +nextRowSplit[i+number.length+2]){
                                    numberOfAdjecentNumbers++;
                                }
                                else if(nextRowSplit[i+number.length+3] === '0' || +nextRowSplit[i+number.length+3]){
                                    numberOfAdjecentNumbers++;
                                } 
                                else if(nextRowSplit[i+number.length+1] === '0' || +nextRowSplit[i+number.length+3]){
                                    numberOfAdjecentNumbers++;
                                }
                            }
                        }
                        if(splittedInput[rowIndex+1]){
                            const nextRowSplit = splittedInput[rowIndex+1].split('');
                            if(+nextRowSplit[i+number.length+1]){
                                if(nextRowSplit[i+number.length+2] === '0' || +nextRowSplit[i+number.length+2]){
                                    numberOfAdjecentNumbers++;
                                }
                                else if(nextRowSplit[i+number.length+3] === '0' || +nextRowSplit[i+number.length+3]){
                                    numberOfAdjecentNumbers++;
                                } 
                                else if(nextRowSplit[i+number.length+1] === '0' || +nextRowSplit[i+number.length+3]){
                                    numberOfAdjecentNumbers++;
                                }
                            }
                        }
                        if(numberOfAdjecentNumbers===0){
                            combinationNumbers.push(number + secondNumber);
                            //console.log('adding numbers next to eachother : ', number, secondNumber);
                            sum += +number * +secondNumber;
                        }
                        }
                    }else{
                        numbersExist = false
                        //console.log('combination number already exists number next to: ', number + " second number :", secondNumber);
                    }
                }
    
                //Check if row after got a symbol on diagonaly
                if(splittedInput[rowIndex+1]){
                    const nextRowSplit = splittedInput[rowIndex+1].split('');
                    
                    if(number.length === 1){
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1] === '*'){
                                gearIndex = i-1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1] === '*'){
                                gearIndex = i+1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i] === '*'){
                                gearIndex = i;
                               check2ndRow = true;
                            }
                        }
                        
                    }
    
                    if(number.length === 2){
                        
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1] === '*'){
                                gearIndex = i-1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1] === '*'){
                                gearIndex = i+1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2] === '*'){
                                gearIndex = i+2;
                               check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i]){
                            
                            if(nextRowSplit[i] === '*'){
                               
                                gearIndex = i;
                                
                               check2ndRow = true;
                            }
                        }
                    }
    
                    if(number.length === 3){
                       
                        if(nextRowSplit[i-1]){
                            if(nextRowSplit[i-1] === '*'){
                                gearIndex = i-1;
                                check2ndRow = true
                            }
                        }
                        if(nextRowSplit[i+1]){
                            if(nextRowSplit[i+1] === '*'){
                                gearIndex = i+1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i+2]){
                            if(nextRowSplit[i+2] === '*'){
                                gearIndex = i+1;
                                check2ndRow = true;
                            }
                        }
                        if(nextRowSplit[i+3]){
                            if(nextRowSplit[i+3] === '*'){
                                gearIndex = i+3;
                                check2ndRow= true
                            }
                        }
                        if(nextRowSplit[i]){
                            if(nextRowSplit[i] === '*'){
                                gearIndex = i;
                                check2ndRow = true;
                            }
                        }
                    }
                    
                    if(check2ndRow){
                        
                        if(splittedInput[rowIndex+2]){
                            
                            const nextRowSplit = splittedInput[rowIndex+2].split('');
                            
                            if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                   
                                    if(+nextRowSplit[gearIndex-3] || nextRowSplit[gearIndex-3] === '0'){
                                        secondNumber = nextRowSplit[gearIndex-3] + nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                    }else{
                                        
                                        if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1]
                                        }
                                    }
                                }else{
                                    if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                        if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                        }
                                    }else{
                                        secondNumber = nextRowSplit[gearIndex-1]
                                    }
                                }
                            }else if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                    if(+nextRowSplit[gearIndex-2] || nextRowSplit[gearIndex-2] === '0'){
                                        secondNumber = nextRowSplit[gearIndex-2] + nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                    }else{
                                        if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex]
                                        }
                                    }
                                }else{
                                    if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                        if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                            secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }
                                    }else{
                                        secondNumber = nextRowSplit[gearIndex]
                                    }
                                }
                            }else if(+nextRowSplit[gearIndex+1] || nextRowSplit[gearIndex+1] === '0'){
                                if(+nextRowSplit[gearIndex] || nextRowSplit[gearIndex] === '0'){
                                    if(+nextRowSplit[gearIndex-1] || nextRowSplit[gearIndex-1] === '0'){
                                        secondNumber = nextRowSplit[gearIndex-1] + nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                    }else{
                                        if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                            secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex] + nextRowSplit[gearIndex+1]
                                        }
                                    }
                                }else{
                                    if(+nextRowSplit[gearIndex+2] || nextRowSplit[gearIndex+2] === '0'){
                                        if(+nextRowSplit[gearIndex+3] || nextRowSplit[gearIndex+3] === '0'){
                                            secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2] + nextRowSplit[gearIndex+3]
                                        }else{
                                            secondNumber = nextRowSplit[gearIndex+1] + nextRowSplit[gearIndex+2]
                                        }
                                    }else{
                                        secondNumber = nextRowSplit[gearIndex+1]
                                    }
                                }
                            }
                            const numbers = number+secondNumber;
                            combinationNumbers.forEach((myNumber) => {
                                if (myNumber === numbers){
                                    //console.log('number already exist : ', numbers);
                                    numbersExist = true;
                                }
                            })
                            if(!numbersExist){
                                if(+number && +secondNumber){
                                
                                
                                if(nextRowSplit[gearIndex] === '.'){
                                    
                                    if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                    && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                        numberOfAdjecentNumbers++;
                                    }

                                }
                                if(nextRowSplit[gearIndex] === '*'){
                                    
                                    if((nextRowSplit[gearIndex+1] === '0' || +nextRowSplit[gearIndex+1])
                                    && (nextRowSplit[gearIndex-1] === '0' || +nextRowSplit[gearIndex-1])){
                                        numberOfAdjecentNumbers++;
                                    }

                                }
                                    
                                
                                    if(numberOfAdjecentNumbers===0){
                                        combinationNumbers.push(numbers);
                                        //console.log('adding number and secondnumber vertically : ', number, secondNumber);
                                        sum += +number * +secondNumber;
                                    }
                                }
                            }else{
                                //console.log('combination number already exists number s: ', number + " second number :", secondNumber);
                                
                                numbersExist = false;
                            }
                        }

                        
                        
                    }
                    
                }
    
                if((rowSplit[i+1] === '0' || rowSplit[i+2] === '0') || (+rowSplit[i+1] && +rowSplit[i+2])){
                    i += 2
                }else if(rowSplit[i+1] === '0' || +rowSplit[i+1]){
                    i += 1
                    
                }
                
    
                
            }
        }
    })
    return sum
}


console.log(part1());

console.log(part2());

