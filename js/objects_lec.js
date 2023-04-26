"use strict";
//Objects: A grouping of data and functionality
// Data item contained in an object are known as properties
// Functions in an object are referred to as methods.

// the object itself will be contained in curl braces.
"use strict";

(function() {

    // We can create an object with properties like so!
    var kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: new Date("12/6/2013")
    };

    // We can also define property values to an object these two ways!
    kamea.age = 6;
    kamea["weight_in_lbs"] = 2400;

    var babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: new Date("2/6/2018")
    };

    // We can access the properties but using the following syntax. dot notations are what you will see in the field.
    console.log(kamea.age);

    console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

    // Well, whales are neat and all, but what would be a more practical application for objects?
    // this array has multiple objects

    var forecast = [// opening for array
        { // opening brace for object
            day: "Monday",
            summary: "Partly cloudy.",
            highsLows: {
                highActual: 92,
                highFeels: 96,
                lowActual: 72,
                lowFeels: 74
            },
            icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, { // opening for the next object.
            day: "Tuesday",
            summary: "Sunny.",
            highsLows: {
                highActual: 99,
                highFeels: 99,
                lowActual: 76,
                lowFeels: 76
            },
            icon: "../img/sunny.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Wednesday",
            summary: "Rainy.",
            highsLows: {
                highActual: 88,
                highFeels: 92,
                lowActual: 68,
                lowFeels: 66
            },
            icon: "../img/rain.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }
    ];// closing bracket

    let arrOfCheeses = [
        {
            name: 'Cheddar',
            origin: 'England',
            fruit: 'N/A'
        }, {
            name: 'Brie',
            origin: 'France',
            fruit: 'n/a'
        }, {
            name: 'Cheddar',
            origin: 'England',
            fruit: 'Cranberry'
        }
    ]

    arrOfCheeses.forEach(function (cheese)){
        console.log(cheese.fruit);
    }
 // All objects need to have the same structure throughout. The Fields are name, origin, and fruit.







    // Above is an array of weather forecasts, here we can see nested objects within the different objects in the array.
    // Notice the syntax, inside the array I have defined the forecast  and established the array.

    forecast.forEach(function(prediction) {
        console.log(prediction.day);
    });
// ensure all your objects have the same structure. as you are defining your collections.




    // While we store the different forecasts in an array to hold the information for the three different days, each object has different information in order to store the information for a daily weather forecast.

    // Let's take a look at another object...

    var user = {
        username: "JimLikesEggs",
        password: "this-is-am-good-password",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("2/17/1967")
    };



    // with this user object, let's add a method:


    let user = {
        username: "JimLikesEggs",
        password: "this-is-am-good-password",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("2/17/1967")
    };

    let user2 = {
        username: "TimHatesEggs",
        password: "this-is-am-good-password",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("5/14/1999")
    };

    function calcAge() {
        let today = new Date();
        if (this.d_o_b.getMonth() <= today.getMonth()){// this is checking for a boolean.
            if (this.d_o_b.getMonth() < today.getMonth() || (this.d_o_b.getMonth() === today.getMonth() && this.d_o_b.getDate() <= today.getDate())) {
                this.age = today.getFullYear() - this.d_o_b.getFullYear();
            } else {
                this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
            }
        } else {
            this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
        }
        return this.age;
    }

    // with this user object, let's add a method:

    user.calcAge = calcAge;
    user2.calcAge = calcAge;

    console.log(user.calcAge());
    console.log(user2.calcAge());
    // Notice with the method we used the "this" keyword. This allows us to have an object to reference itself when creating a method. It will not work when trying to define a property.

    // user.name = this.username; // This will give an error.
    // access to keyword when defining a function or a method. will not work when trying to define a property.
    // console.log(user.name);



})();