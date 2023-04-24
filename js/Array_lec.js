// APR 24 2023
//MANIPULATING ARRAYS
// array: used to collect data.
// arrays are denoted in [] | items in an array are sorted/seperated by commas
// elements: items listed in an array.
//
"use strict";
(function (){
    //Declaring an array. | Arr = Array, typically used online and other coders.
    let emptyArr = [];
    console.log(Array.isArray(emptyArr)); // Why did he do this?

    let cheeses = ['Cheddar', ' String', 'Wensleydale']; // this array contains three elements.
    // JS, doesn't have to have the same data types.
    let falsyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
    //...However, this can lead to some unintended results with a looping/iterative structure.
    // of these elements contained within are different data types.

    console.log(cheeses[1]) // this will log String. Why? Arrays are indexed at  0. So this will print the second element in our cheese array.
    console.log(cheeses.indexOf("Cheddar")); // This will return 0.
    console.log(cheeses[0].indexOf("Brie")); // This will be -1.
    console.log(cheeses.indexOf("White Cheddar")); // This will return -1 as well.

    console.log(cheeses.length);

    //Iteration and Loops:

})();