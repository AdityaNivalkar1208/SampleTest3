// let day = 2;

// if (day === 0) {
//     console.log("Sunday");
// } else if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thursday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid Day");
// }


let day = +prompt("Guess the day");

switch (day) {
    case 0: // Sunday
        console.log("Sunday");
        break;
    case 1: // Monday
        console.log("Monday");
        break;
    case 2: // Tuesday
        console.log("Tuesday");
        break;
    case 3: //
        console.log("Wednesday");
        break;
    case 4: //
        console.log("Thursday");
        break;
    case 5: //
        console.log("Friday");
        break;
    case 6: //
        console.log("Saturday");
        break;
    default: //
        console.log("Invalid Day");
}

let a = +prompt("Enter the First Number");
let b = +prompt("Enter the Second Number");

let char = prompt("Enter the operation");

switch (char) {
    case '+':
        console.log("Sum is ", a + b);
        break;
    case '-':
        console.log("Subtraction is ", a - b);
        break;
    case '*':
        console.log("Multiplication is ", a * b);
        break;
    case '/':
        console.log("Division is ", a / b);
        break;
    default:
        console.log("Invalid Operation");
}