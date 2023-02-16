// const myArray = ["Hello", "Cat", "dog", "lion"];

// function isLength(string) {
//     return string.length === 3;
// }

// const ans = isLength();
// console.log(ans);

// const ans = myArray.find(isLength);
// console.log(ans);

// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

const users = [
    { userId: 1, userName: "aditya" },
    { userId: 2, userName: "harhit" },
    { userId: 3, userName: "anuj" },
    { userId: 4, userName: "astha" },
];

console.log(users);
const myUser = users.find((user) => user.userId === 4);
console.log(myUser);