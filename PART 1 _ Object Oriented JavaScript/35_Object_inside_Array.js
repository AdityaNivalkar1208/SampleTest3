// Object inside array
// very useful in real world applications

// const users = [
//     { userId: 1, firstName: 'John', gender: 'Male' },
//     { userId: 2, firstName: 'Vicky', gender: 'Male' },
//     { userId: 3, firstName: 'Mandy', gender: 'Male' },
// ];
// console.log(users);
// for (let user of users) {
//     console.log(user);
//     console.log(user.userId);
//     console.log(user.gender);
//     console.log(user.firstName);
// }


// const [{ firstName }, { userId }, { gender }] = users;
// console.log(firstName, userId, gender);


const cart = [
    { RollNO: 1, Name: "Aditya", age: 20 },
    { RollNO: 2, Name: "sanas", age: 25 },
    { RollNO: 3, Name: "harshal", age: 30 }
];

for (let carts of cart) {
    console.log(carts.RollNO);
    console.log(carts.Name);
    console.log(carts.age);
}