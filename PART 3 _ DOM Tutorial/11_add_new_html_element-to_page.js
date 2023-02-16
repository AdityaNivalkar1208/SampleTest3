// Add new HTML elements to page



// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
todoList.innerHTML += "<li> New Todo</li>";
console.log(todoList.innerHTML);

const navItem = document.querySelector(".nav-item");
const li = document.createElement("li");
li.textContent = "About Us";
navItem.append(li);




// when you should use it, when you should not