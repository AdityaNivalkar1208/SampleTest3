// Splice method
// Start , delete , insert 

// const myArray = ["Item1", "Item2", "Item3"];
// delete 
// const deletedItem = myArray.splice(1, 2);
// console.log("Deleted Item : ", deletedItem);


// insert
// myArray.splice(1, 2, "Aditya");
// console.log(myArray);

// insert and delete together

// const deletedItem = myArray.splice(1, 2, "Insert1", "Insert2");
// console.log("Deleted Item : ", deletedItem);
// console.log(myArray);


// New example   

const myArray = ["Ishu", "Durva", "Vedant", "Sharvari", "Aditya", "Aditya"];
const ans = myArray.splice(5, 6);
console.log(myArray);

const newArray = myArray.splice(5, 6, "Hrishi");
console.log(myArray);