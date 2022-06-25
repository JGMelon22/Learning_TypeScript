// Unknown Type
import * as clc from "cli-color";

var stuff: unknown;
var stringBuilderMockUp: string[] = [];

function strMock(): string[] | string {
    stringBuilderMockUp.push(
        `${clc.green.bold("Working with \"Unknown Type\"\n")}`,
        `${clc.white.bold("stuff = true")} - ${typeof (stuff = true)}\n`,
        `${clc.white.bold("stuff = \"Hello, There\"")} - ${typeof (stuff = "Hello, There")}\n`,
        `${clc.white.bold("stuff = []")} - ${typeof (stuff = [])}\n`,
        `${clc.white.bold("stuff = {}")} - ${typeof (stuff = {})}\n`,
        `${clc.white.bold("stuff = Math.random")} - ${typeof (stuff = Math.random)}\n`,
        `${clc.white.bold("stuff = null")} - ${typeof (stuff = null)}\n`,
        `${clc.white.bold("stuff = undefined")} - ${typeof (stuff = undefined)}\n`,
        `${clc.white.bold("stuff = new TypeError()")}; - ${typeof (stuff = new TypeError())}`
    );

    return stringBuilderMockUp.join("");
}

console.log(strMock());

// Another eg
let userInput: unknown;
let userName: string;

userInput = console.log(`\n${clc.blue.bold("User Input:")} ${userInput = "Nice"}`);

/* The type 'unknown' is not assignable to type 'string
* userName = userInput; // Error
*/
if (typeof (userInput) === "string") {
    console.log(`${clc.blue.bold("userName = userInput")}: ${userName = userInput}`);
}

// A better safe than sorry check with unknown type
else {
    console.log(userName = clc.red.bold("The type 'unknown' is not assignable to type 'string"));
}
