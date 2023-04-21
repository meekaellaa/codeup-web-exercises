function addFive(number){
    return number + 5;
}
console.log(addFive(3));


function isMultipleOfFive(input){
    return input % 5 === 0;

}

console.log(isMultipleOfFive( 300));

// Make a function named isThree(input)
function isThree(input){
    if (input === 3){
        return true;
    } else {
        return false;
    }
}

console.log(isThree(40));
console.log(isThree(3));
console.log(isThree("3"));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(x){
    return x % 3 ===0;
}

console.log(isMultipleOfThree(4));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(x){
    if (x % 3 === 0 && x % 5 ===0){
        return true;
    } else {
        return false;
    }
}
console.log(isMultipleOfThreeAndFive(46));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    if (target % n === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isMultipleOf(45, 2));
console.log(isMultipleOf(45, 5));
console.log(isMultipleOf(100, 10));

// Make a function named isTrue(boolean)
function isTrue(boolean){
    if (boolean === 'string'){
        return true;
    } else{
        return false;
    }
}


console.log(isTrue("hello"));
console.log(isTrue(4));
console.log(isTrue('string'));

// Make a function named isFalse(boolean)
function isFalse(boolean){
    if (boolean !== false){
        return false;
    } else{
        return true;
    }
}

console.log(isFalse(3));
console.log(isFalse("Hello"));
console.log(isFalse("false"));
console.log(isFalse("False"));
console.log(isFalse(-0));


// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input){

}




// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
// The function will return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.

function willLoginUser(username){

}