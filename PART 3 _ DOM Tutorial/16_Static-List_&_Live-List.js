// querySelectorAll aaplyala static list deil

// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLI = document.createElement("li");
// sixthLI.textContent = " Item 6 ";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLI);
// console.log(listItems);

// getElementBySomething aaplyala live list deil

const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLI = document.createElement("li");
sixthLI.textContent = " Item 6 ";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLI);
console.log(listItems);