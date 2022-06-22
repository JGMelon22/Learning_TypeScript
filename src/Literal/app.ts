// Literals
import * as clc from "cli-color";

function combine(input1: number | string, input2: number | string, resultConversion: "as-number" | "as-text") {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
        result = +input1 + +input2; // +stringNumber casts to number, like parseFloat
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedNumbers = combine(69, 420, "as-number");
const combinedWords = combine("Monkey", "Strong", "as-text");

console.log(clc.blue.bold(`Combined Numbers: ${combinedNumbers}`));
console.log(clc.green.bold(`combined Words: ${combinedWords}`));