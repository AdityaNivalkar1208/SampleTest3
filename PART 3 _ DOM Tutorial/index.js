const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newToDoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `
    <span class="text">${newToDoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    // console.log(e.target);
    // if user click on done button then
    if (e.target.classList.contains("done")) {
        // console.log("GREAT");
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if (e.target.classList.contains("remove")) {
        // console.log("you want to  something?");
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();

    }
});