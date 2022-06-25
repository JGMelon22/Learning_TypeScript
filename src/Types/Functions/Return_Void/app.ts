// Return Types and Void
import * as clc from "cli-color";

function sumNums(n1: number, n2: number): number {
    return +n1 + +n2;
}

function displayResult(num: number): void {
    console.log(`${clc.yellow("Void Function")}: ${num}`);
}

console.log(`${clc.blue("Return Function")}: ${sumNums(1, 2)}`);
displayResult(5);