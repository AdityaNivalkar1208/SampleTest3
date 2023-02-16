// Block scope VS Function Scope



// let and const are block scope :  we cannot access outside of the box
// var is function scope : we can access inside outside of the box

// {
//     let firstName = "aditya";
// }
// console.log(firstName);

// {
//     const firstName = "aditya";
// }
// console.log(firstName);

// {
//     var firstName = "aditya";
// }
// console.log(firstName);


let firstName = "acid";

function myApp() {
    if (true) {
        let firstName = "aditya";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();