// Union Type
// To work with numbers and strings 
function combine(input1: number | string, input2: number | string) {

    let result;

    //  Check type
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 26);
console.log(`30 + 26: ${combinedAges}`);

const combinedNames = combine("João", "Monize");
console.log(`João + Monize: ${combinedNames}`);