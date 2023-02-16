// document.createElement()

// append 
// prepend
// remove
// before
// after

// const todoList = document.querySelector(".todo-list");
// const newToDoItem = document.createElement("li");
// newToDoItem.textContent = "Teach Students";
// const newTodoItemText = document.createTextNode("Teach students");
// newToDoItem.append(newTodoItemText);
// todoList.append(newToDoItem);
// todoList.prepend(newToDoItem);
// console.log(newToDoItem);

// const todoList = document.querySelector(".todo-list li");
// todoList.remove();
// console.log(todoList);


const newToDoItem = document.createElement("li");
newToDoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.before(newToDoItem);
todoList.after(newToDoItem);

const inputElement = document.createElement("button");
inputElement.textContent = "New Students";
const todolist = document.querySelector(".signup-btn");
todolist.after(inputElement);
inputElement.style.width = "6rem";
inputElement.style.height = "1.5rem";
inputElement.style.color = "#fff";
inputElement.style.backgroundColor = "#000";
inputElement.style.outline = "none";
inputElement.style.border = "none";