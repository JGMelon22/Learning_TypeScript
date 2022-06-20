"use strict";
exports.__esModule = true;
// CLI-Calculator
// Used NPMs: readline-sync and @types/readline-sync
/*
First Number
Operator
Second Number
*/
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    // Check if everything is valid at once
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // All good, converting string to number
    if (validInput) {
        // Converting string to number
        var firstNum = parseFloat(firstStr);
        var secondNum = parseFloat(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log("Result: ".concat(result.toFixed(2)));
    }
    else {
        console.log("\nInvalid input\n");
        main(); // Repeats till all inputs are valid
    }
}
// Math time
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        // As we defined a literal type "Operator", 
        // a default value is not necessary. 
    }
}
// Verifying is its a valid operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
// Verifying values are numbers
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
