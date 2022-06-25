// CLI-Calculator
// Used NPMs: readline-sync and @types/readline-sync
/* 
First Number
Operator
Second Number
*/
import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/'; // Op types must be one of this

function main(): void {
    const firstStr: string = question("Enter first number:\n");
    const operator: string = question("Enter operator: \n");
    const secondStr: string = question("Enter second number:\n");

    // Check if everything is valid at once
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    // All good, converting string to number
    if (validInput) {

        // Converting string to number
        const firstNum: number = parseFloat(firstStr);
        const secondNum: number = parseFloat(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(`Result: ${result.toFixed(2)}`);
    } else {
        console.log("\nInvalid input\n");
        main(); // Repeats till all inputs are valid
    }
}

// Math time
function calculate(firstNum: number, operator: Operator, secondNum: number) {
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
function isOperator(operator: string): boolean {
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
function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();