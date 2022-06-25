"use strict";
exports.__esModule = true;
// Return Types and Void
var clc = require("cli-color");
function sumNums(n1, n2) {
    return +n1 + +n2;
}
function displayResult(num) {
    console.log("".concat(clc.yellow("Void Function"), ": ").concat(num));
}
console.log("".concat(clc.blue("Return Function"), ": ").concat(sumNums(1, 2)));
displayResult(5);
