// sets (it is iterable)                    
// store data
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)


// difference bet array and sets
// array ----> duplicates/repeated values allowed
// sets ----> duplicates/repeated values are not allowed
const numbers = new Set([1, 2, 3, 4]);
// console.log(numbers);
// console.log(numbers.add(5));
// console.log(numbers.delete(1));
// console.log(numbers);


// check wheather number is existing or not

// if (numbers.has(6)) {
//     console.log("present");
// } else {
//     console.log("not present");
// }



// for (let number of numbers) {
//     console.log(number);
// }


const myNumber = [1, 1, 2, 2, 3, 3, 4, 5, 6];
const uniqueNumber = new Set(myNumber);
let length = 0;
for (let element of uniqueNumber) {
    length++;
}
console.log(uniqueNumber);
console.log(length);