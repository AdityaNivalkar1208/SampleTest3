// synchronous programming vs asynchronous programming
// synchronous programming
// console.log("script started");

// for (let i = 1; i < 10; i++) {
//     console.log("hello");
// }

// console.log("script ended");


// setTimeout 

// console.log("script start");

// setTimeout(() => {
//     console.log("hello");
// }, 100);

// console.log("script ended");  22:05


// console.log("script start");

// const id = setTimeout(() => {
//     console.log("hello");
// }, 100);

// for (let i = 1; i < 100; i++) {
//     console.log("aditya");
// }
// console.log("setTimeout id is", id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script ended");

console.log("SCript start");
const id = setInterval(() => {
    console.log("hello");
}, 2000);

console.log("Script end");