// Write a function named remainder  that will accept two arguments and return the remainder
// of a division between the two values (the first divided by the second). If either argument is not a
// number, the function should return false
//*** this next line of code didn't work.*******
// function remainder(x,y){
//     if ( remainder === typeof 'string'){
//         return (x / y) ;
//     } else{
//         return false;
//     }
//
//     }
//
// console.log(4,5);

// function remainder(x,y){
//     if (remainder === isNaN ){
//         return false;
//     } else
//         return x % y;
// }
// *** This WORKED!
//     function remainder(x,y){
//        if ( typeof x === 'number' && typeof y === 'number') {
//            return  x % y;
//        } else{
//            return  false;
//        }
//     }
//
//
// console.log(remainder(6,9));
// console.log(remainder(21,7));// returns 0.
// console.log(remainder(-34, 3));// returns -1
// console.log(remainder(144, -11));// returns 1
// console.log(remainder(-14, "2"));// returns false
// console.log(remainder("36", 9));// returns false
// console.log(remainder("44", "-3"));// returns false
// console.log(remainder("Jeff", "Geoff"));// returns false
// console.log(remainder(false, true));// returns false
// console.log(remainder());// returns false

//Question #2
//Write a function named containsAce  that takes in an argument and returns true  if the
// argument passed is a string that contains the sequence of characters "ace"  somewhere
// within the string. This check should be case-insensitive. The function should return false if the
// argument is not a string, or if it doesn't contain "ace"  somewhere in the string.
// Consider the following test cases:
//
//  let ourAce = "ace"
//
// function containsAce(x){
//      if ( typeof x === 'string'){
//          let goLow = x.toLowerCase()
//         return  goLow.includes(ourAce);
//     } else {
//          return false;
//      }
// }
//
//
// console.log(containsAce("place")) // returns true
// console.log(containsAce("ACE Hardware")) // returns true
// console.log(containsAce("PaLaCe!1!")) // returns true
// console.log(containsAce("camel")) // returns false
// console.log(containsAce("CACHE")) // returns false
// console.log(containsAce("phase 1")) // returns false
// console.log(containsAce("bass")) // returns false
// console.log(containsAce(["a","c","e"])) // returns false
// console.log(containsAce(135)) // returns false
// console.log(containsAce(true)) // returns false
// console.log(containsAce()) // returns false

// function containsAce(x){
//     x.toLowerCase();
//     if ( typeof x === 'string' && x.includes(ourAce)){
//         return true;
//     } else {
//         return false;
//     }
// }

//QUESTION #3
// Write a function named divisibleBy5 that accepts an argument returns true is the
// argument a number that is evenly divisible by 5. If the argument provided is either not a number,
//     or is not evenly divisible by 5, the function should return false .

// function divisibleBy5(input){
//    if(typeof input === "number"){
//        return input % 5 === 0;
//    } else {
//        return false;
//    }
// }
//
//
//
// //     Consider the following test cases:
// console.log(divisibleBy5(255)) // returns true
// console.log(divisibleBy5(-100)) // returns true
// console.log(divisibleBy5(5) )// returns true
// console.log(divisibleBy5(0)) // returns true
// console.log(divisibleBy5("80")) // returns false
// console.log(divisibleBy5(6))// returns false
// console.log(divisibleBy5(-99)) // returns false
// console.log(divisibleBy5(false))// returns false
// console.log(divisibleBy5([5,10,15])) // returns false
// console.log(divisibleBy5())// returns false


//Question #4
// Write a function named averageThreeNumbers that accepts three arguments, and returns
// the average (mean) of the three arguments if all three arguments are numbers. If any/all of the
// three arguments are not a number, or if there are fewer than three arguments, the function
// should return false .
// function averageThreeNumbers(x,y,z){
//     if ( typeof x === "number" && typeof y === "number" && typeof z === "number"){
//         return (x + y + z) / 3;
//     } else {
//         return false;
//     }
// }
//
// console.log(averageThreeNumbers(10,5,15)) // returns 10
// console.log(averageThreeNumbers(19,44,-8)) // returns 18.333333333333332
// console.log(averageThreeNumbers("two", 3, 1)) // returns false
// console.log(averageThreeNumbers(2, "3", 1) )// returns false
// console.log(averageThreeNumbers(6,7,"8") )// returns false
// console.log(averageThreeNumbers("duck", "duck", "goose") )// returns false
// console.log(averageThreeNumbers(true, false, true)) // returns false
// console.log(averageThreeNumbers(22,24)) // returns false
//

// QUESTION #5
// Write a function named stringsAreSameLength that accepts two arguments and returns
// true if both arguments are strings of the same length. If either argument is not a string, has
// fewer than two arguments, or if the two strings are of different lengths, the function should return
// false .

function stringsAreSameLength(input1,input2){
    if (typeof input1 === "string" && typeof input2 === "string"){
            return input1.length === input2.length;
    } else {
        return false;
    }
}







//     Consider the following test cases:
console.log(stringsAreSameLength("duck", "code")) // returns true
console.log(stringsAreSameLength("Buick", "CAMEL")) // returns true
console.log(stringsAreSameLength("ERROR_404", "file-miss")) // returns true
console.log(stringsAreSameLength("ERROR_CODE", "1234567890")) // returns true
console.log(stringsAreSameLength("Oops", 1234)) // returns false
console.log(stringsAreSameLength(22, "huh...")) // returns false
console.log(stringsAreSameLength("Camel", "Case")) // returns false
console.log(stringsAreSameLength(81,34)) // returns false
console.log(stringsAreSameLength("ace", [1,2,3])) // returns false
console.log(stringsAreSameLength("fisherman")) // returns false
console.log(stringsAreSameLength()) // returns false



