let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getToDo(value) {
  let todo = document.createElement("div");
  let text = document.createElement("span");
  text.innerHTML = value;
  todo.appendChild(text);

  let close = document.createElement("span");
  close.innerHTML = "&times"; // adding x for closing the todo list
  close.classList.add("delete"); //adding delete class

  close.addEventListener("click", () => {
    todos.removeChild(todo);
  });

  todo.appendChild( close);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  if(!value.trim()) return; //return if the input is empty
  todos.appendChild(getToDo(value));
  input.value = "";
})