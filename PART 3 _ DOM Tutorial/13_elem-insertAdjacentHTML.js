// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>Teach Students</li>");
// todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students</li>");
// todoList.insertAdjacentHTML("afterbegin", "<li>Teach Students</li>");
// todoList.insertAdjacentHTML("afeterend", "<li>Teach Students</li>");

const items = document.querySelector(".nav-items");
items.insertAdjacentHTML("afterbegin", "<a> New </a>");