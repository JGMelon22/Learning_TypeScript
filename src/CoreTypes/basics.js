// Core data types
var number1;
number1 = 5; // Redundant
var number2 = 2.5;
var printResult = true;
var resultPhrase = "Result is: ";
// Due to inference, an error will occur
// resultPhrase = true; 
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) { // showResult === numeric
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
