// using arrow function
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", () => {
    console.log("Clicked Me !!!");
    console.log("value of this");
    console.log(this);
});


// normal function
// const btn = document.querySelector(".btn-headline");

// function myFunc() {
//     console.log("Clicked Me !!!");
//     console.log("value of this");
//     console.log(this);
// }

// btn.addEventListener("click", myFunc);