// Tuples
var employee = {
    name: "Mike Miller",
    age: 19,
    hobbies: ["Coding", "Studying", "Gaming"],
    role: [2, "Developer"]
};
console.log("Employee Role:", employee.role);
console.log("Employee Hobbies:");
for (var index = 0; index < employee.hobbies.length; index++) {
    console.log("\t", employee.hobbies[index]);
}
