// iterable
// jispe hum for of loop laga sakte hain
// string, array like iterable

// const firstName = 'first';
// for (let char of firstName) {
//     console.log(char);
// }

// const items = ["item1", "item2"];
// for (let item in items) {
//     console.log(item);
// }

// object cannot be iterable
const users = { 'key': 'value1', 'key2': 'value2' };
for (let item of users) {
    console.log(item);
}

// array like object 
// jiske pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example : string


// const firstName = 'firstName';
// console.log(firstName.length);
// console.log(firstName[2]);