"use strict";
exports.__esModule = true;
// Aliases II
var clc = require("cli-color");
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var textOnly = clc.blue.bold(combine("Amogus-", "SUS", "as-text"));
var numberOnly = clc.yellow.bold(combine(18, 26, "as-number"));
console.log("".concat(clc.white("Only texts:"), " ").concat(textOnly, "\n").concat(clc.white("Only numbers:"), " ").concat(numberOnly));
