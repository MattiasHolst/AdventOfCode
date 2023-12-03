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



console.log(part1());

