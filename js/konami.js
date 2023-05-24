"use strict";
//Begin by mapping out key value pairs.
let keys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
};
// identify the sequence of keys to be pressed.
let konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a",
];
// figure out how to change this to utilize jQuery. AND if i use jQuery, do I need the keys array above?
document.addEventListener("keydown", konami, false);

let keyCount = 0;
// Everytime a key is pressed the function below konami gets called
function konami(input) {
  //   this variable stores the keys that were pressed.
  let keyPressed = keys[input.keyCode];
  // As we continue, we are checking to see if the key pressed match the konamiCode and increment.
  if (keyPressed === konamiCode[keyCount]) {
    keyCount++;
    // here we are checking that the sequence of keys entered are the same length as the konamiCode
    if (keyCount === konamiCode.length) {
      //   if it is true, then codeActivated is called which alerts the user that they have cracked the code.
      codeActivated();
      resetKey();
    }
    // if the user doesn't another alert will populate saying telling the user to try again.
  } else {
    alert("TRY AGAIN") && resetKey();
  }
}
function codeActivated() {
  alert("CONGRAAAAAAAAAAAAAATS!!!");
}
function resetKey() {
  keyCount = 0;
}
