// Enums
// code convention for enums is "Enum"
enum Role {
    Admin = 0,
    ReadOnly = 1,
    Author = 2
}

const person = {
    name: "Mike Miller",
    age: 19,
    hobbies: ["Coding", "Studying", "Gaming"],
    role: Role.ReadOnly
};

if (person.role === Role.Author) {
    console.log("Author profile");
}

switch (person.role) {
    case Role.Author:
        console.log("Author profile");
        break;
    case Role.Admin:
        console.log("Admin profile");
        break;
    case Role.ReadOnly:
        console.log("Read Only profile");
        break;
    default:
        console.log("Unknown profile");
        break;
}
