// Objects Reference Type
// arrays for good but not sufficient
// for real world data
// objects store key value pairs for
// objects don't have index

// how to create objects 
const person = {
        name: "John",
        age: 22,
        hobbies: ["guitar", "sleeping", "music"]
    }
    // const person = { name: 'John', age: 19 };
console.log(person);
console.log(typeof person);

// how to access data from objects ?

console.log(person.name);
console.log(person.age);

// how to add key value pairs to objects ?

person.rollno = "30";
person.gender = "female";
console.log(person);

const extra = ["readings", "comments", "singing"];
person.hobbies = ["bathing", ...extra];

const frontend = ["CSS", "HTML", "JAVASCRIPT"];
const backend = ["JAVASCRIPT", "NODEJS", "MONGODB"];

person.full_stack_developer = [...frontend, ...backend];

console.log(person);