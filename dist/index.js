"use strict";
console.log("typscript yeah");
let myName;
let myAge;
myAge = 32;
// TYPE: BOOLEAN
let myBoolean = true;
myBoolean = false;
if (!myBoolean) {
    console.log(`myBoolean is ${myBoolean}`);
}
// TYPE: ANY
let myAny = myBoolean;
myAny = myBoolean;
myAny = "May";
myName = myAny;
console.log(`myName is type ${typeof myName}`); // string
// TYPE: UNKNOWN
let myUnknown;
myUnknown = myBoolean;
myUnknown = "Meowww";
// myName = myUnknown; myName is not assigned to string
// myName = myUnknown.toString(); notwork, unknown is type unknown
// TYPE: ARRAY
let classNames = ["Oia", "Tung tung sahur", "Weeewiwi"];
let nums = [1, 2, 4, 5];
// Tuple: mix of types --rare, use object
let myTuple = ["May", 12, true];
// myTuple.push("New item"); prevent accidentally add to array by using readonly
console.log(`Tuple: ${myTuple}`);
// Named Tuple
let namedTuple = [
    "May",
    "Keso",
    32,
];
console.log(typeof namedTuple[2]);
console.log(namedTuple[0]);
// Assign type to parameter and return = string
const sayName = (myName) => {
    return `Hi! My name is ${myName}`;
};
console.log(sayName("Gurkan"));
// console.log(sayName(22)); num not allowed
const squareOfNumber = (num) => {
    num * num;
};
console.log(`Type of square is ${typeof squareOfNumber(2)}`);
let age = "12";
const calculationTenYears = (currentAge) => {
    if (typeof currentAge === "string") {
        return "That's not a number!";
    }
    else {
        return `Your age in ten years is ${currentAge + 10}`;
    }
};
console.log(calculationTenYears(3));
let capybara = {
    name: "Capybara",
    type: "mammals",
    european: false,
};
let chihuahua = {
    name: "Chihuahua",
    type: "mammals",
    european: false,
    breed: "Chihuahua",
};
let May = {
    firstName: "May",
    lastName: "Oreo",
    age: 32,
    alive: true,
};
let Merlock = {
    firstName: "Merlock",
    age: 28,
    alive: true,
    children: 2,
    childrenNames: ["Druid", "Werewolf"],
    pet: {
        name: "Bubu",
        type: "cat",
        lifespan: 2,
        european: false,
    },
};
