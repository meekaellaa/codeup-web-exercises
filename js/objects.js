(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */



        // We can create an object with properties like so!

        let person = {
            firstName: "Michaella ",
            lastName: "Moreno",
        }
        console.log(person.firstName);
        console.log(person.lastName);




            /**
             * TODO:
             * Add a sayHello method to the person object that returns a greeting using
             * the firstName and lastName properties.
             * console.log the returned message to check your work
             *
             * Example
             * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
             */


    person = {
        sayHello: ("HELLO FROM " + (person.firstName) + '' + (person.lastName) + "!"),

    };

    console.log(person.sayHello);


//     let person = {
//         firstName: "Michaella ",
//         lastName: "Moreno",
//         // sayHello: function(){
//         //     return  sayHello: ("HELLO FROM " + (this.firstName) + '' + (this.lastName) + "!"),
//     }
// }
// }

            /** TODO:
             * HEB has an offer for the shoppers that buy products amounting to
             * more than $200. If a shopper spends more than $200, they get a 12%
             * discount. Write a JS program, using conditionals, that logs to the
             * browser, how much Ryan, Cameron and George need to pay. We know that
             * Cameron bought $180, Ryan $250 and George $320. Your program will have to
             * display a line with the name of the person, the amount before the
             * discount, the discount, if any, and the amount after the discount.
             *
             * Uncomment the lines below to create an array of objects where each object
             * represents one shopper. Use a foreach loop to iterate through the array,
             * and console.log the relevant messages for each person
             */
                // SHOPPERS BECAME SHOPPER BECAUSE YOU ARE USING A FOREACH LOOP. CYCLING THROUGH EACH NAME IN THE ARRAY.

            var shoppers = [
                {name: 'Cameron', amount: 180},
                {name: 'Ryan', amount: 250},
                {name: 'George', amount: 320},
                {name: 'me', amount: 500}
            ];
// Answer. Everything else is a step to reach this answer. make sure to make it plural so when it's called upon you can use the singular.
    shoppers.forEach(function (shopper){
        if(shopper.amount >= 200){
            console.log(shopper.name + 'spent $ ' + shopper.amount + '. ' + 'Congratulations, you earned  a discount of 12%! Your new total is ' + (shopper.amount - (shopper.amount * .12)));
         } else {
             console.log(shopper.name + ' you will not be receiving a 12% discount. Your total is ' + shopper.amount);
        }

     });
    //
    // for (let i = 0; i < 4;i++){
    //     if(shoppers[i].amount >= 200){
    //         console.log(shoppers[i].name + 'spent $ ' + shoppers[i].amount + '. ' + 'Congratulations, you earned  a discount of 12%! Your new total is ' + (shoppers[i].amount - (shoppers[i].amount * .12)));
    //     } else {
    //         console.log(shoppers[i].name + ' you will not be receiving a 12% discount. Your total is ' + shoppers[i].amount);
    //     }
    //
    //
    // }
    // console.log(shoppers.length);



//*******DO IT WITHOUT THE LOOP FIRST AND THEN REFACTOR IT INTO A LOOP!!!!!!****** TRY TO DO IT FOR ONE PERSON FIRST.
//
//         if(shoppers[1].amount >= 200){
//             console.log(shoppers[1].name + 'spent $ ' + shoppers[1].amount + '. ' + 'Congratulations, you earned  a discount of 12%! Your new total is ' + (shoppers[1].amount - (shoppers[1].amount * .12)));
//         } else {
//             console.log(shoppers[1].name + ' you will not be receiving a 12% discount. Your total is ' + shoppers[1].amount);
//         }
//




    // // Mercy's Solution
    // shoppers.forEach(function (shopper){
    //     let amountBeforeEachDiscount = shopper.amount;
    //     let discount = 0
    //     if (shopper.amount > 200) {
    //         discount = shopper.amount * 0.12;
    //     }
    //     let amountAfterDiscount = amountBeforeEachDiscount - discount;
    //
    //     console.log(shopper.name + " spent$" + amountBeforeEachDiscount.toFixed(2) + ", got a discount of $" + discount.toFixed(2) + ", and needs to pay $" + amountAfterDiscount.toFixed(2));
    // })
























    /** TODO:
             * Create an array of objects that represent books and store it in a
             * variable named `books`. Each object should have a title and an author
             * property. The author property should be an object with properties
             * `firstName` and `lastName`. Be creative and add at least 5 books to the
             * array
             *
             * Example:
             * > console.log(books[0].title) // "The Salmon of Doubt"
             * > console.log(books[0].author.firstName) // "Douglas"
             * > console.log(books[0].author.lastName) // "Adams"
             */

                let








            /**
             * TODO:
             * Loop through the books array and output the following information about
             * each book:
             * - the book number (use the index of the book in the array)
             * - the book title
             * - author's full name (first name + last name)
             *
             * Example Console Output:
             *
             *      Book # 1
             *      Title: The Salmon of Doubt
             *      Author: Douglas Adams
             *      ---
             *      Book # 2
             *      Title: Walkaway
             *      Author: Cory Doctorow
             *      ---
             *      Book # 3
             *      Title: A Brief History of Time
             *      Author: Stephen Hawking
             *      ---
             *      ...
             */






            /**
             * Bonus:
             * - Create a function named `createBook` that accepts a title and author
             *   name and returns a book object with the properties described
             *   previously. Refactor your code that creates the books array to instead
             *   use your function.
             * - Create a function named `showBookInfo` that accepts a book object and
             *   outputs the information described above. Refactor your loop to use your
             *   `showBookInfo` function.
             */

        // cody pushes the book into the array above and calls the function from above. make sure to move it above the foreach.
        //he pushes by using push


        // he edits the books.for each and calls the function




















            // FOR LOOP EXAMPLE

    // var shoppers = [
    //         {name: 'Cameron', amount: 180},
    //         {name: 'Ryan', amount: 250},
    //         {name: 'George', amount: 320}
    //     ];
    // shoppers.forEach(function (shopper){
    //     if(shopper.amount >= 200){
    //         console.log(shopper.name + 'spent $ ' + shopper.amount + '. ' + 'Congratulations, you earned  a discount of 12%! Your new total is ' + (shopper.amount - (shopper.amount * .12)));
    //     } else {
    //         console.log(shopper.name + ' you will not be receiving a 12% discount. Your total is ' + shopper.amount);
    //     }

    // });
    // starting at zero because using an array and arrays index at 0
    // shoppers length could also be renamed as 4 BCUZ there are 4 elements in the array.

    //    for(let i = 0; i < 4;i++){
    //        if(shoppers[i].amount >= 200){
    //            console.log(shoppers[i].name + 'spent $ ' + shoppers[i].amount + '. ' + 'Congratulations, you earned  a discount of 12%! Your new total is ' + (shoppers[i].amount - (shoppers[i].amount * .12)));
    //        } else {
    //            console.log(shoppers[i].name + ' you will not be receiving a 12% discount. Your total is ' + shoppers[i].amount);
    //        }
    //
    //
    //    }
    // console.log(shoppers.length);










    })();