// console.log("Happy Birthda To You..................");

function singHappyBirthday() {
    console.log("Happy Birthda To You..................");
}
singHappyBirthday();

// addition
// function addition() {
//     console.log(2 + 4);
// }

// addition();
// function addition(n1, n2) {
//     return n1 + n2;
// }
// let a = +prompt("Enter the number1 : ");
// let b = +prompt("Enter the number2 : ");
// const returnaddition = addition(a, b);
// console.log("Sum Will Be : ", returnaddition);

// odd or even
// input : 1 number
// output : true, false

// function isEven(number) {
//     if (number % 2 === 0) {
//         console.log('It is even');
//         return true;
//     } else {
//         console.log('It is odd');
//         return false;
//     }
// }

// let number = +prompt("Enter the number : ");
// console.log(isEven(number));

// let age1 = 5;
// let drink1 = age1 % 2 === 0 ? "It is even" : "It is odd";
// console.log(drink1);


// console.log(12 % 2 === 0);

// Function

// input : String
// Output : firstCharacter

// function firstCharacter(string) {
//     return string[0];
// }

// let letter = prompt('Enter the string : ');

// console.log(firstCharacter(letter));


// function
// input : array , target(number)
// output : index of target if target is present in array .....else not present

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return `value is not present in array`;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const ans = findTarget(array, 3);
console.log(ans);