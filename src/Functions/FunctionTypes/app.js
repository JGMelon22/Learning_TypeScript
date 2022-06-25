"use strict";
exports.__esModule = true;
// Function Types
var clc = require("cli-color");
function add(val1, val2) {
    return val1 + val2;
}
function mockSUS(impostor) {
    console.log("".concat(clc.red(impostor), " seems"));
}
mockSUS("Red");
console.log(clc.bold("\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \n\u2588\u2588      \u2588\u2588    \u2588\u2588 \u2588\u2588      \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \n     \u2588\u2588 \u2588\u2588    \u2588\u2588      \u2588\u2588 \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588                    \n"));
var combineValues; // Force a build in TS type 
combineValues = add;
// So now it ain't work 
/*
* combineValues = 5;
*/
console.log(clc.bold("- Type Functions -"));
console.log("".concat(clc.blue("Combining Values"), ": ").concat(combineValues(2, 3)));
