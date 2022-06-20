// Union Type
// To work with numbers and strings 
function combine(input1, input2) {
    var result;
    //  Check type
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log("30 + 26: ".concat(combinedAges));
var combinedNames = combine("João", "Monize");
console.log("Jo\u00E3o + Monize: ".concat(combinedNames));
