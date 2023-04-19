"use strict";
// (function(){
// // while loops: runs while our condition is true.
//         let areWeThereYet = false;
//         while(areWeThereYet === false){
//             areWeThereYet = confirm("Are we there yet?");
//         }
//
//     alert("Thanks!");
//
//
// })();
//Q: does it need to be in a function? no, but it is helpful to have a loop within a function.
// (function(){
// while loops: runs while our condition is true.
    let areWeThereYet = false;
    while(areWeThereYet === false){
        areWeThereYet = confirm("Are we there yet?");
    }

    alert("Thanks!");
function areWeThereYetNow(){
    let keepLooping = true;
    while (keepLooping){
        keepLooping = !confirm("Are we there yet, now??");
    }
}
    areWeThereYetNow();
// infinite loop
    // while(true){
    //     alert("This is the song that never ends. i just goes on and on my friends. AND ON........................ ");
    // }


// WHILE LOOP: while loops only runs if the condition evaluates to true. evaluate before body.

    let companyHasEmail = true;
    while (companyHasEmail === false){
        companyHasEmail = confirm("Can we have your email?");
    }
//WHEN THIS LOADS IT WILL NOT RUN. Because it is equal to false

//Q: WHAT IF I WANT A LOOP TO RUN AT LEAST ONCE. USE COUSIN 'DO WHILE LOOP'. This will continue running body of loop and then evaluate condition.
    do{
        companyHasEmail = confirm("Please, can we have your email?");
    } while ( companyHasEmail === false)

// commonly used at codeup: for loop, separation of different elements use (;)
// inside these parentheses have 3 elements. initialization : idirator known as i
// conditions: arithmetic value, reassignment of the
//increments: what is the change with every ideration
    for (let i = 0; i < 10; i++ ){
        console.log(`This loop has run ${i +1} times(s). `);
    }
// typical structure for a for loop. for loops are very customizable.
// arrays are 0 indexed.
for (let i = 0; i <= 10; i++ ){
    console.log(`This loop has run ${i +1} times(s). `);
}
//another example.
for (let i = 10; i > 0; i-=2 ){
    console.log(i);
}

// })();
