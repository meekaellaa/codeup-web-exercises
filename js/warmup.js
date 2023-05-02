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

// function findFactors(x) {
//   if (typeof x === "number" && !isNaN(x)){
//     let bucket = [];
//     for ( let i = 1; i<= x; i++){
//         if( x % i === 0){
//             bucket.push(i);   // do not need to worry about return.
//         }
//     }
//     return bucket;
//   } else{
//       return false;
//   }
//
// }

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

    function countEs(word) {
    if(typeof word === "string" && word.indexOf("e","E")){
        return word.indexOf();
        } else{
        return false;
    }
}

//This isn't working......

//David's Solution:
 function countEs(str){
    if (typeof str === "string"){
        let count = 0;
        let normalizedStr = str.toLowerCase();
        for (let i = 0; i <str.length; i++)
            if(normalizedStr.charAt(i) === "e"){
                count++;
            }
        return count;
    } else {
        return false;
    }
 }

console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;







