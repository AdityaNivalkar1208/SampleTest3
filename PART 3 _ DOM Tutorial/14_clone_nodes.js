const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New todo";
const li2 = li.cloneNode(true);
li2.textContent = "Adding";
ul.append(li);
ul.prepend(li2);