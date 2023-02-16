// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Projects";
// ul.appendChild(li);


// insertBefore
// const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li, ul.firstChild);

// replaceChild
// ul.replaceChild(li, referenceNode);

// removeChild
// ul.removeChild(referenceNode);