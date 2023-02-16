// filter method use : 
// for example ,
// 1) take one array
// 2) check if there even or odd no is present in it
// 3) this thing can be happened by using filter method it will check if even or odd no is present in it or not 

const numbers = [1, 3, 2, 6, 4, 8];

// 1st way 
const isEven = function(number) {
    return number % 2 == 0;
}
const ans = numbers.filter(isEven);
console.log(ans);

// 2nd way

// const isEven = numbers.filter((number) => {
//     return number % 2 == 0;
// });
// console.log(isEven);