// console.log("Hello World");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// 7:30:59 dil na jaaneya
// this is called event bubbling

// capturing events

// child.addEventListener("click", () => {
//     console.log("Capturing child !!!!");
// }, true);

// parent.addEventListener("click", () => {
//     console.log("Capturing parent !!!!");
// }, true);
// grandparent.addEventListener("click", () => {
//     console.log("Capturing grandparent !!!!");
// }, true);
// document.body.addEventListener("click", () => {
//     console.log("Capturing body !!!!");
// }, true);

// Non-Capturing
// child.addEventListener("click", () => {
//     console.log("You clicked on child!");
// });

// parent.addEventListener("click", () => {
//     console.log("You clicked on parent!");
// });
// grandparent.addEventListener("click", () => {
//     console.log("You clicked on grandparent!");
// });
// document.body.addEventListener("click", () => {
//     console.log("You clicked on body!");
// });


// event delegation

grandparent.addEventListener("click", (e) => {
    console.log(e.target.textContent);
});