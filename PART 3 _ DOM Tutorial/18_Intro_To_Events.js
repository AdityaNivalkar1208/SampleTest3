// intro to events

// event add karayche 3 method ahet
const btn = document.querySelector(".btn-headline");
// console.log(btn);

// btn.onclick = function() {
//     console.log("You Clicked Me");
// }

// method ---> addeventlistener
// function clickMe() {
//     console.log("Click Me !!!");
// }
// btn.addEventListener("click", clickMe);
// btn.addEventListener("click", function() {
//     console.log("Click Me !!");
// });


// using arrow function
// btn.addEventListener("click", () => {
//     console.log("Click Me !!");
// });

// const lastbtn = document.querySelector("#last"); //
// lastbtn.addEventListener("click", () => {
//     console.log("Finish Work !!");
// })

const work = document.querySelector(".work");
work.addEventListener("click", () => {
    const todoList = document.querySelector(".todo-list");
    todoList.insertAdjacentHTML("beforeend", "<li>Teach Students</li>");
})


const workdone = document.querySelector(".work");
workdone.addEventListener("click", () => {
    const list = document.querySelector(".todo-list");
    list.add("<li></li>");
})