//Warm- Up 04/27/2023
// Question: Write a JS function that returns the number 7.
 function seven(){
    return 7;
}

console.log(seven());

//David's Solution:
//Looks just like yours! Good Job!


//Warm -Up 05/01/2023
// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

function findFactors(x) {
  if (typeof x === "number" && !isNaN(x)){
    let bucket = [];
    for ( let i = 1; i<= x; i++){
        if( x % i === 0){
            bucket.push(i);   // do not need to worry about return.
        }
    }
    return bucket;
  } else{
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





