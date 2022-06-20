// Objects
// const person: { // Key value pair to force TS compiler to only allow this kinda of object, person
//     name: string;
//     age: number;
// } = {
const person = {
    name: "João Gabriel",
    age: 20,
    hobbies: ["Video Games", "Coding"] // String array
};

let favoriteActivities: string[] // String array
favoriteActivities = ["Video Games"]

// console.log(person.nickname);
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map()); // Error!!!
}