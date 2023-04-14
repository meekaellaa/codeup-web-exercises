//console.log("Whats UP Dragon!");




//alert("Welcome to my Website");



// the following line will show the OK/CANCEL confirm dialog
//var confirmed = confirm('Are you sure you want to do XYZ?');
//console.log(confirmed); // will be either true or false


//var userInput = prompt('What is your favorite color?');
//console.log('The user entered: ' + userInput);

//alert("great, your favorite color is " + userInput)

//Question: Movie
var userInput = prompt("How long will you be renting Little Mermaid?");
console.log("User entered: " + userInput);
var userInput1 = prompt("How long will you be renting Brother Bear?");
console.log("User entered: " + userInput1);
var userInput2 = prompt("How long will you be renting Hercules?");
console.log("User entered: " + userInput2);
alert("Your total will be: " + "$" + ((userInput*3) +(userInput1*3) + (userInput2* 3))+".00");

//Question: J.O.B.
alert("How much money did you bank this week? Let's see. Press 'OK' to continue.");
    var googleInput = prompt("How many hours did you work this week for Google?");
        console.log("User entered: " + googleInput);
    var amazonInput = prompt("How many hours did you work this week for Amazon?");
        console.log("User entered: " + amazonInput);
    var facebookInput = prompt("How many hours did you work for Facebook this week?");
        console.log("User entered: " + facebookInput);
alert(" You got PAID! You made exactly " + "$" + ((googleInput*400) + (amazonInput*380) + (facebookInput*350)) +".00!");

//Question: Enrollment
alert("Now we will begin enrollment. Press 'OK' to continue.");
function schedule(){
    var nonConflicting = confirm("If class is full click 'Cancel'. If not full, click 'Ok'.");
    var scheduleConflict = confirm("Does this conflict with your schedule? Click 'OK' if it does NOT.");
    if(nonConflicting === true && scheduleConflict === true){
        alert("You can attend class.");
    } else{
        alert("Sorry, you will not be attending this class.");
    }
}
schedule()

//Question: Product
alert("Welcome to my Store! To continue to purchasing click 'Ok'");
function products(){
    var customerPurchase =confirm("Have your purchased more than 2 items? Click 'OK' for Yes.");
    var offer = confirm("Has the offer expired? Click 'Cancel' for Yes.");
    var membership = confirm("Are you a premium customer? Click 'OK' for Yes.");
    if( customerPurchase === true &&  offer === true) {
        alert('You may continue with the order! ');
    } else {
        alert("Order will be canceled.");
    }

}
products()




