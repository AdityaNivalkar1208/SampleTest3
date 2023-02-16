// how to clone array
// how to concatenate two arrays
let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat("item3", "item4");
// let array2 = [].concat(array1);

// spread operator
array1.push("item3");
array2.push("item3");
let array3 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array1 === array2);