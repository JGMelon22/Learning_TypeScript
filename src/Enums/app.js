// Enums
// code convention for enums is "Enum"
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["ReadOnly"] = 2] = "ReadOnly";
    Role[Role["Author"] = 3] = "Author";
})(Role || (Role = {}));
var person = {
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
