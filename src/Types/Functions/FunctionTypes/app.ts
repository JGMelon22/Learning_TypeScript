// Function Types
import * as clc from "cli-color";

function add(val1: number, val2: number) {
    return val1 + val2;
}

// Amogus function (cringe, I know)
type Impostor = "Red";

function mockSUS(impostor: Impostor): void {
    console.log(`${clc.red(impostor)} seems`);
}

mockSUS("Red");
console.log(clc.bold(`
███████ ██    ██ ███████ 
██      ██    ██ ██      
███████ ██    ██ ███████ 
     ██ ██    ██      ██ 
███████  ██████  ███████                    
`));
let combineValues: (x: number, y: number) => number; // Force a build in TS type 
combineValues = add;

// So now it ain't work 
/*
* combineValues = 5;
*/
console.log(clc.bold("- Type Functions -"));
console.log(`${clc.blue("Combining Values")}: ${combineValues(2, 3)}`);