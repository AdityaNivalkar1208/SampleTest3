const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
for (let fruit of fruits) {
    // console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);


// const fruits = ["apple", "apple", "mango", "grapes"];
// // const fruits2 = [];
// for (let index in fruits) {
//     for (let index2 of fruits[index]) {
//         if (index === index2) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(fruits);