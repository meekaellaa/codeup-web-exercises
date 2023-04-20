"use strict";
//Q: Break and Continue:
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
let aNumber = parseFloat(prompt('Please enter and odd number between 1 and 50.'))

while(true){
    if (aNumber % 2 === 0 || aNumber > 50 || aNumber < 1){
        alert('INVALID.')
        aNumber = parseFloat(prompt("Choose another option."))
    } else{
        break;
    }
}
console.log(aNumber);
// COME BACK TO THIS QUESTION AND SEE IF AN IF/ELSE STATEMENT WOULD WORK.

for (let i = 1; i <= 49; i++){
    if (i % 2 !== 0){
         if(i === aNumber){
        console.log('Yikes, are you sure you wanna skip this number? ' + i)
        continue;
  }
    }
        console.log('Here is an ODD number ' + i);
}

//David's Solution:

let numToSkip;
    while (true){
        numToSkip = parseInt(prompt("Give me a number between 1 and 50, NOW."))
       if(numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0){
           break;
        }
    }

    for(let i = 1; i < 50; i += 2){
        if( i === numToSkip){
            console.log(`OOOOPS! SKIPING ${numToSkip}`);
            continue;
        }
        console.log(i);
    }




