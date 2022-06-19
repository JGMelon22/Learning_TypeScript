// Core data types
let number1: number;
number1 = 5; // Redundant

const number2 = 2.5;
const printResult = true;
let resultPhrase = "Result is: "
// Due to inference, an error will occur
// resultPhrase = true; 

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) { // showResult === numeric
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const result = add(number1, number2, printResult, resultPhrase);

console.log(result);