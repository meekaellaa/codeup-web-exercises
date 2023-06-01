//Warm- Up 04/27/2023
// Question: Write a JS function that returns the number 7.
//  function seven(){
//     return 7;
// }
//
// console.log(seven());

//David's Solution:
//Looks just like yours! Good Job!

//Warm -Up 05/01/2023
// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

function findFactors(x) {
  if (typeof x === "number" && !isNaN(x)) {
    let bucket = [];
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) {
        bucket.push(i); // do not need to worry about return.
      }
    }
    return bucket;
  } else {
    return false;
  }
}

// david calls this a bucket function..

// console.log(findFactors(6)); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;

// Warm-up 05/02/2023
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

//     function countEs(word) {
//     if(typeof word === "string" && word.indexOf("e","E")){
//         return word.indexOf();
//         } else{
//         return false;
//     }
// }

//This isn't working......

//David's Solution:
//  function countEs(str){
//     if (typeof str === "string"){
//         let count = 0;
//         let normalizedStr = str.toLowerCase();
//         for (let i = 0; i <str.length; i++)
//             if(normalizedStr.charAt(i) === "e"){
//                 count++;
//             }
//         return count;
//     } else {
//         return false;
//     }
//  }
//
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

// Warm-up 05/03/2023
// Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'. This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.

// function countEs(str) {
//     if(typeof str === "string"){
//         let case = str.toLowerCase();
//         if ( case = str.charAt() === "e")
//         return ;
//     } else{
//         return false;
//     }
//
//
// }

// function takeString(str){
//     if ( typeof str === "string"){
//         let lowerCase =
//         return true;
//     } else{
//         return false;
//     }
// }

// David's Solution
function containsE(str) {
  if (countEs(str) === false) {
    return false;
  } else {
    return countEs(str) > 0;
  }
}
//  // Johann's Solution
// function containsE(str){
//     if(typeof str !== "string"){
//         return false;
//     } else {
//         return str.toLowerCase().indexOf("e") > -1;
//     }
// }
//
//
// console.log(takeString("Ease")); // returns 2;
// console.log(takeString("teleconference")); // returns 5;
// console.log(takeString("TOM")); // returns 0;
// console.log(takeString(true)); // returns false;
// console.log(takeString(['e', 'E'])); // returns false;
// console.log(takeString()); // returns false;

//Warm-Up 04/04/2023
// Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.

// function fizzBuzz(x){
//     for(let x =1 ; x <=100; x++)
//     if(x % 3 === 0){
//         return "fizz";
//     } else if(x % 5 === 0){
//         return "buzz"
//     } else if(x % 3 === 0 && x % 5 === 0)
//         return "fizzBuzz";
// }

// let f = "fizz";
// let b = "buzz";
// for (let num = 1; num <=100 ; num++) {
//     if (num% 3 === 0 && num % 5 ===0){
//         return
//     }
//     else if (num % 5 === 0){
//         console.log(num+b);
//     }
//     else if (num % 3 === 0){
//         console.log(num+f);
//     }
//     else {
//         console.log(num);
//     }
// }
//1. Start 1-100 to print in console
//2.
// function fizzBuzz(){
//
//     for (let i=1;i <= 100;i++){
//        if(i % 3 === 0 && i % 5 === 0){
//            console.log("fizzbuzz");
//        } else if(i % 5 === 0){
//             console.log("buzz")
//        } else if(i % 3 === 0){
//            console.log("fizz")
//        }else{
//            console.log(i);
//        }
//     }
// }
//
// fizzBuzz();

//Warm-Up 05/05/2023
// Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:
// 2
// 4
// 16
// 256
// 65536

// let i = 2;
// do {
//   console.log(i);
//   i *= i;
// } while (i < 100000);

//Warm-up 05/10/2023
// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

// function addEmUp(arr) {
//   let sum = 0;
//   arr.forEach(function (num) {
//     sum += num;
//   });
//   return sum;
// }
function addEmUp(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(addEmUp([2, 6, 19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44, 10, 7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
console.log(addEmUp([-13, -92, -3500])); // returns -3605

//Warm-up 05/11/2023
//// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

// function explainString(str) {
//   return {
//     string: str,
//     numberOfEs: containsE(str),
//     isEvenLength: str.length % 2 === 0,
//   };
// }
//
// console.log(explainString("cheese"));
// // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog"));
// // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

//Warm-up
// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
  {
    name: "Hamtaro",
    heightInMM: 86,
    fur: ["orange", "white"],
    gender: "male",
    dateOfBirth: "August 6",
  },
  {
    name: "Bijou",
    heightInMM: 75,
    fur: ["white"],
    gender: "female",
    dateOfBirth: "July 10",
  },
  {
    name: "Oxnard",
    heightInMM: 100,
    fur: ["grey", "white"],
    gender: "male",
    dateOfBirth: "May 3",
  },
  {
    name: "Boss",
    heightInMM: 120,
    fur: ["brown", "white"],
    gender: "male",
    dateOfBirth: "September 21",
  },
  {
    name: "Snoozer",
    heightInMM: 85,
    fur: ["brown", "white", "pink"],
    gender: "male",
    dateOfBirth: "January 14",
  },
];

function extractNames(arr) {
  let bucket = [];
  arr.forEach(function (el) {
    bucket.push(el.name);
  });
  return bucket;
}

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

//Warm-up 05/15/2023
//Warm-up 05/16/2023
function oneFurColor(arr) {
  let newArr = [];
  arr.forEach(function (elem) {
    if (elem.fur.length === 1) {
      newArr.push(elem);
    }
  });
  return newArr;
}

console.log(oneFurColor(hamsters));

//WARM-UP 05/17/2023
// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

function mostColorful(arr) {
  let mostColors = { fur: [] };
  arr.forEach(function (obj) {
    if (obj.fur.length > mostColors.fur.length) {
      mostColors = obj;
    }
  });
  return;
}

console.log(mostColorful(hamsters));
// returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};

// Warmup 05/18/2023
// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

function describeNumber(num) {
  return {
    number: num,
    evenOrOdd: num % 2 === 0 ? "even" : "odd",
    factors: findFactors(num),
    numberOfDigits: `${num}`.length,
  };
}
//   let number = num;
//   if (num % 2 === 0);
//   return
// }

console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

//WARM-UP 05/19/2023
// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree() {}

console.log(multiplyElementsByThree([3, 4, 5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12, 8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];

//05/23/2023--------------------------------------------------
// Today's Warm-up we spoke about resources and mini personal side projects to help us practice and understand some of the concepts we have already learned.
//w3resource.com
//---------Tutoring With David 05/24/2023----------------------------
