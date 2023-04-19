"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// #1 Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
// function isBoolean(input){
//
//
// }
function isBoolean(input){
    return input === typeof (input);

}
// David's Solution:
// function isBoolean(){
//     return typeof input == 'boolean';
// }

//#2 Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
function isString(word){
    return word === parseInt();
}
// David's Solution:
// function isString(input){
//     return typeof input === "string";
// }


//#3 Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.
function isNotString(input){
    return input !== input.toString();
}
// David's Solutions:
// ex 1
// function isNotString(input){
//     return typeof input !== "string";
// }
// ex 2
// function isNotString(input){
//     return !isString(input);
// }
// LOTS OF PROBLEMS WILL LOOK LIKE EXAMPLE ABOVE. DO NOT HAVE TO REDEFINE YOUR LOGIC. LEVERAGE A FUNCTION WITHIN A FUNCTION.

//#4 Define a function named isEmptyString that will return true when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
function isEmptyString(string){
    if (string === ""){
        return true;
    } else {
        return false;
    }
}
// David's Solutions:
// function isEmptyString(input){
//     return input === "";
// }


//#5 Define a function named isNotANumber that accepts an input and returns true or false based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.
function isNotANumber(number){
    if(number === isNaN()){
        return true;
    } else{
        return false;
    }
}

// function isNotANumber(input){
//     return input !isNaN();
// }
// David's Solutions:
// ex 1
// function isNotANumber(input){
//     return typeof input !== "number";
// }
// ex 2 Kofie's Note.. David said hold for next test.
// function isNotANumber(input) {
//     return (isNaN(parseFloat(input)));
// }
// ex 3 Khinememe Solution:
// function isNotANumber(input){
//     if(typeof(input)==="number"){
//         return isNaN(input);
//     }else{
//         return isNaN(parseInt(input));
//     }
// }
// Assessments have a preference for parseFloat. hint. hint.
//#6Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.
function isNegative(numbero){
    return numbero < 0;

}
// David's Solutions:
// function isNegative(numbero){
//     return parseFloat(numbero) <0;
// }
// use parseFloat

//#7 Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.
function isPositive(chicken){
    return chicken > 0;

}
// function isPositivee(numbero){
//     return parseFloat(numbero) <0;
//     }

//#8 Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.
function isZero(zero) {
    return zero == 0;
}

// function isZero(zero){
//     return parseFloat(input) === 0;
// }




//#9 Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
// CITED: https://www.geeksforgeeks.org/how-to-check-if-a-variable-is-an-array-in-javascript/
function isArray(array){
    return Array.isArray(array);
}
//DAVID'S SOLUTIONS:







//#10 Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
function upperCase(input){
    if (input !== toString()){
        return false;
    } else if(input === toString()){
        return input.toUpperCase;
    } else{
        return input;
    }

}
//DAVID'S SOLUTIONS: already has a function.
// function upperCase(string){
//     if (isString(string)){
//         return string.toUpperCase();
//     } else {
//         return false;
//     }
// }
//The structure of this question will be exactly the same for the next assessment... WINK WINK!