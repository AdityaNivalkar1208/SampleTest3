const fruits = ["apple", "mango"];
const next = ["grapes", "orange"];
// fruits = ["grapes", "orange"]; // we cannot assigned double value
fruits.push("banana");

const mixed = [...fruits, ...next];
console.log(mixed);