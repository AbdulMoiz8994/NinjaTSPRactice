"use strict";
console.log("moiz khanzada");
var form = {
    firstName: "moiz",
    lastName: "Attari",
    id: 12,
};
console.log(form);
var greet;
greet = function (user) {
    console.log(user.firstName + " is Frontend Developer");
};
var greet1;
greet1 = function (objects) {
    console.log(objects.a + " and " + objects.b);
};
greet1({ a: "Moiz", b: 12 });
var greet2;
greet2 = function (Nub) {
    if (Nub.data === "add") {
        return Nub.numOne + Nub.numTwo;
    }
    else {
        return Nub.numOne - Nub.numTwo;
    }
};
var result = greet2({ numOne: 1, numTwo: 10, data: "add" });
console.log(result);
