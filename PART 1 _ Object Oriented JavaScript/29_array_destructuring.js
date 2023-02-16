const myArray = ["value1", "value2", "value3"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myArray1", myvar1);
// console.log("value of myArray2", myvar2);

let [myvar1, myvar2] = myArray;
console.log("value of myArray1", myvar1);
console.log("value of myArray2", myvar2);


const even = [2, 4, 6, 8];

const [even1, ...odd] = even;
console.log("value of myArray1", even1);
console.log("value of myArray2", odd);