"use strict";
exports.__esModule = true;
// Literals
var clc = require("cli-color");
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
        result = +input1 + +input2; // +stringNumber casts to number, like parseFloat
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNumbers = combine(69, 420, "as-number");
var combinedWords = combine("Monkey", "Strong", "as-text");
console.log(clc.blue.bold("Combined Numbers: ".concat(combinedNumbers)));
console.log(clc.green.bold("combined Words: ".concat(combinedWords)));
