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
    console.log(cheeses[cheeses.length - 1]); // Should get back Wensleydale. *** get someone to explain this again ***
    console.log(cheeses.length);

    //Iteration and Loops:
    // Let's create a loop to print all of our cheeses to the console.
    for (let i = 0; i < cheeses.length; i++){
        console.log(cheeses[i]); // this will print 'Cheddar', ' String', 'Wensleydale'
    }
    //backwards or reverse
    for (let i = cheeses.length -1; i >= 0; i--){
        console.log(cheeses[i]); // this will print  'Wensleydale', ' String', 'Cheddar'
    }
// *** NEED TO REVIEW LOOPS! ***
    // For/each loop is not an actual loop and you CANNOT use a break and continue. BUT you can use if/else statement.

    //For/each loop
    cheeses.forEach(function (){ // this is the basic structure. elements are a required parameter inside a function.
        //index and array are optional.
        //we will name our arrays a plural noun, and refer to individual elements by the singular version of the noun.

    })

})();

