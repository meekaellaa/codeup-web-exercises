(function () {//function dSomething(){
   "use strict"
    //return 2;
//}
//function doSomething(input){
//  return input;
//}
//var result = doSomething("Wassup");

//console.log(result);


//function increment(x) {
//  return x + 1;
//}
//
// var four = increment(3);
// console.log(four);
//
//
// var six = increment(increment(increment(3)));
// console.log(six);
//
// function increment(someNumber) {
//     return someNumber + 1;
//     console.log('you will never see this.');
//  //   return someNumber + 2; // This will never run
// }

//console.log(increment(42));



// var increment = function(x) {
//     return x + 1;
// };
//
// var two = increment(1);
// console.log(two);

// function sum(a, b) {
//     var result = a + b; // technically the `result` variable is not necessary
//     return result;      // instead we could just return a + b directly
// }
//
// var x = 3;
// var seven = sum(x, 4);
//
// console.log(seven);

// a function with no return value
// function shout(message) {
//     alert(message.toUpperCase() + "!!!");
//     //without the return below the return is defined.
//     return message.toUpperCase() + "!!!";
// }
//
// var returnValue = shout('hello there');
// console.log(returnValue); // undefined
//
// // a function with no parameters and no return value
// function sayHello(message) {
//     alert('hello there! ' + message);
// }
//
// sayHello("codeup"); // "codeup" is ignored

// declare a global variable
// var globalVar = "Look, I'm Global!";

// define the sayHello function
// function sayHello() {
    // globalVar is accessible here since the sayHello function scope is a sub-scope of the global scope
    //subscopes can get access to your local variables.
//     alert(globalVar);
// }
//
// sayHello();

// var globalVar = "Look, I'm Global!"; // declare a global variable
//
// function scopeExample() {
//     var localVar = "Look, I'm Local!"; // declare a local variable
//     alert(localVar); // localVar is accessible here
//     alert(globalVar); // globalVar is accessible here
// }
//
// scopeExample();
// alert(localVar); // localVar is NOT accessible here and this will produce an error

// var x = 300;
// var y = 100;
//
// function scopeExample() {
//     var x = 1;
//     var y = 2;
//     console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
//     return x + y;
// }
//
// console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
// var returnValue = scopeExample();
// console.log(returnValue); // 3


// define a function and immediately invoke (i.e. call) it

    var iffeVar = "I'm local to the IIFE.";


alert(iffeVar); // undefined


})();





