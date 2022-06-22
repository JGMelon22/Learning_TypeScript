// Aliases II
import * as clc from "cli-color";

type Combinable = number | string;
type CombinableDescriptor = number | string;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: CombinableDescriptor
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }

    else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const textOnly = clc.blue.bold(combine("Amogus-", "SUS", "as-text"));
const numberOnly = clc.yellow.bold(combine(18, 26, "as-number"));

console.log(`${clc.white("Only texts:")} ${textOnly}\n${clc.white("Only numbers:")} ${numberOnly}`);