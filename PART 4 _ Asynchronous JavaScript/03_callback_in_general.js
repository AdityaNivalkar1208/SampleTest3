// function myFunc(callback) {
//     console.log("Function is doing task 1");
//     callback();
// }

// function myFunc1() {
//     console.log("Function is doing task 2");
// }

// myFunc(myFunc1);

function getTwonumbersAndAdd(number1, number2, onSuccess, onFailure) {
    // console.log(number1, number2);
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    } else {
        // console.log("Wrong data type");
        onFailure();
    }
}

// function addtwonumber(num1, num2) {
//     console.log(num1 + num2);
// }

getTwonumbersAndAdd("4", 5, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("Wrong data type");
    console.log("Please Pass numbers only");
});