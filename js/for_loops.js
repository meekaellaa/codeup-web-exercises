"use strict";
(function (){


//Q:1
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(m){
    for(let i = 1; i < 11; i = i+1) {
        console.log(`${m} * ${i} = ${m * i}`);

    }
}

showMultiplicationTable(7)

//David's Example:
// function showMultiplicationTable(num){
//     for (let i =1; i < 11; i++){
//         console.log(`${num} X ${i} = ${num * i}`);
//     }
// }
// showMultiplicationTable(99);



//Q2: Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...


let number ;
    function randomNumber(){
    for (let i=0; i<10; i++){
        number = Math.floor(Math.random() * 180 + 20)
        if (number % 2 === 0){
            console.log(`${number} is even.`)
        } else console.log(`${number} is odd.`)

    }
}
randomNumber();

// David's Example:
// This loop runs 10 times.. The code for generating a new number, has to be done inside the loop. If not, it will be generated once.
// math.floor will round down. why useing: gives more of a repeatable
//     Math.random() only going to generate a number between 1 and 0. we multiply is by our maximum - minimum.
//     bcuz the number generated is multiplied by some result that comes up to but not including our value.
//
//     * (200 - 20 + 1) + 20 by adding 20, i get a number between 20 and 180.


//     for(let i = 1; i < 11; i = i+1){
//         let randomNum = Math.floor(Math.random() * 181) + 20;
//         if(randomNum % 2 === 0){
//             console.log(`${randomNum} is even`)
//         } else{
//             console.log(`${randomNum} is odd.`)
//         }
// // console.log(randomNum % 2 === 0 ? `${randomNum} is even` : randomNum % 2 === 0 ? `${randomNum} is odd`);
// }



//Q3: Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i <=9; i++){
    console.log(i.toString().repeat(i));

}
//David's Example:




















//Q4:
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
//
// for (let i = 5; i < 101; i= 1-5) {
//     console.log(`${i} - ${5} = ${i - 5}`);
// }
for (let i = 100; i >= 5; i-=5){
    console.log(i);
}
//David's Example:
    for ( let i = 100; i >= 5; i -=5){
        console.log(i);
    }
//the following are webites to visit if need more practice:
// jshero.net
// hackerrank
// leetcode












// function showMultiplicationTable(m){
//     for(let i = 1; i < 11; i = i+1) {
//         console.log(`${m} * ${i} = ${m * i}`);
//
//     }
// }
//
// showMultiplicationTable(7)











})();