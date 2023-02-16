// how to iterate objects
const person = {
    name: "John",
    age: 22,
    hobbies: ["guitar", "sleeping", "music"]
}

// for in loop
// Object.keys

// for (let key in person) {
//     console.log(person[key]);
//     console.log(`${key}: ${person[key]}`);
// }

// console.log(Object.keys(person));

// const val = Array.isArray((Object.keys(person)));
// console.log(val);


for (let key of Object.keys(person)) {
    console.log(person[key]);
}