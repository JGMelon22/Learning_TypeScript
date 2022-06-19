// Objects
// const person: { // Key value pair to force TS compiler to only allow this kinda of object, person
//     name: string;
//     age: number;
// } = {
var person = {
    name: "João Gabriel",
    age: 20,
    hobbies: ["Video Games", "Coding"] // String array
};
var favoriteActivities; // String array
favoriteActivities = ["Video Games"];
// console.log(person.nickname);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
