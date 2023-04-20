"use strict";
// Q: While Loops:
// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
// NOTES: While loops are used to repeat a block of code as long as a certain condition is true. **THE LOOPS WILL CONTINUE UNTIL THE CONDITION BECOMES FALSE**// let i = 1;
// //
//EXAMPLE found online:
// https://www.sitepoint.com/community/t/javascript-function-with-computing-power-noob-question-using-for-loop/36762/3
// function power(base, exponent) {
//     var result = 1;
//     for (var count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// }
//
// console.log(power(2, 10));

let i = 1;
while(i<=65536){
    i*=2
    console.log(i);
}
//* example (**) used for exponents
//let i = 1;
//
//     ** is used for exponents
//     while(2**i < 70000){
//         console.log(2**i);
//         i++;
//     }
//
//     let x = 2;
//
//     while(x <= 65536){
//         console.log(x);
//         x = x * 2;
//     }
//
//
// Q: An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// Math.floor(Math.random() * 5) + 1;

let x = Math.floor(Math.random() *50) + 50;
    console.log(x);
       let m = Math.floor(Math.random() * 5) + 1;
    console.log(m);






































