// Important array methods

// forEach : function la call karel and parameter chya value return karel
// map
// filter
// reduce

const number = [4, 2, 5, 8];

// function multiplyBytwo(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// console.log(`${number}*2 = ${number * 2}`)
// }

// multiplyBytwo(number[0], 0);
// for (let i = 0; i < number.length; i++) {
//     multiplyBytwo(number[i], i);
// }


// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// }
// number.forEach(myFunc);



// number.forEach(function(number, index) {
//     console.log(`index is ${index} number is ${number}`);
// });

// number.forEach(function(number) {
//     console.log(number * 3);
// })


const users = [
    { firstName: "Aditya", age: 21 },
    { firstName: "Acid", age: 01 },
    { firstName: "Uri", age: 19 },
    { firstName: "kashimi", age: 25 },
];

users.forEach(function(user) {
    console.log(user.firstName + " " + user.age);
});
// console.log("\n");
// for (let user of users) {
//     console.log(user.firstName + " " + user.age);
// }

for (let user of users) {
    console.log(user.firstName + " " + user.age);
}

for (let i = 0; i < users.length; i++) {
    console.log(users[i].firstName + " " + users[i].age);
}

users.forEach((user) => {
    console.log(user.firstName + " " + user.age);
    console.log(users);
});