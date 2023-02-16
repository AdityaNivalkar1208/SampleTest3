// let age = 18;

// if (age <= 100) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }


// let num = +prompt("Please enter your number");
// if (num % 2 == 0) {
//     console.log("It is even number");
// } else {
//     console.log("It is odd number");
// }

// let number = 4;
// let count = 0;
// let i = 1;
// for (i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         count++;
//     }
// }
// if (count == 2) {
//     console.log("It is prime number");
// } else {
//     console.log("It is not prime number");
// }


let row = +prompt("enter row no : ");
let col = +prompt("enter col no : ");

// let i=j=1;
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
        console.log("*");
    }
    console.log(" ");
}