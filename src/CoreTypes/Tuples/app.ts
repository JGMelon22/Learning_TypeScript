// Tuples
const employee: { // Typing the object
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Mike Miller",
    age: 19,
    hobbies: ["Coding", "Studying", "Gaming"],
    role: [2, "Developer"]
};

/* Error
employee.role.push("sysAdmin");
employee.role[1] = 6
*/

console.log("Employee Role:", employee.role);
console.log("Employee Hobbies:");

for (let index = 0; index < employee.hobbies.length; index++) {

    console.log("\t",employee.hobbies[index]);
}