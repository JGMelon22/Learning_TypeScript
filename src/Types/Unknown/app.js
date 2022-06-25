"use strict";
exports.__esModule = true;
// Unknown Type
var clc = require("cli-color");
var stuff;
var stringBuilderMockUp = [];
function strMock() {
    stringBuilderMockUp.push("".concat(clc.green.bold("Working with \"Unknown Type\"\n")), "".concat(clc.white.bold("stuff = true"), " - ").concat(typeof (stuff = true), "\n"), "".concat(clc.white.bold("stuff = \"Hello, There\""), " - ").concat(typeof (stuff = "Hello, There"), "\n"), "".concat(clc.white.bold("stuff = []"), " - ").concat(typeof (stuff = []), "\n"), "".concat(clc.white.bold("stuff = {}"), " - ").concat(typeof (stuff = {}), "\n"), "".concat(clc.white.bold("stuff = Math.random"), " - ").concat(typeof (stuff = Math.random), "\n"), "".concat(clc.white.bold("stuff = null"), " - ").concat(typeof (stuff = null), "\n"), "".concat(clc.white.bold("stuff = undefined"), " - ").concat(typeof (stuff = undefined), "\n"), "".concat(clc.white.bold("stuff = new TypeError()"), "; - ").concat(typeof (stuff = new TypeError())));
    return stringBuilderMockUp.join("");
}
console.log(strMock());
// Another eg
var userInput;
var userName;
userInput = console.log("\n".concat(clc.blue.bold("User Input:"), " ").concat(userInput = "Nice"));
/* The type 'unknown' is not assignable to type 'string
* userName = userInput; // Error
*/
if (typeof (userInput) === "string") {
    console.log("".concat(clc.blue.bold("userName = userInput"), ": ").concat(userName = userInput));
}
// A better safe than sorry check with unknown type
else {
    console.log(userName = clc.red.bold("The type 'unknown' is not assignable to type 'string"));
}
