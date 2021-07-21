let list = document.querySelector(".todo-list");
let input = document.querySelector(".todo-input");
let form = document.querySelector(".todo-form");

form.onsubmit = function (evt) {
  evt.preventDefault();

  // Создаём новую задачу - элемент li
  let newTask = document.createElement("li");

  // Берём текст задачи из поля ввода input
  newTask.textContent = input.value;

  newTask.classList.add("list-item");

  // Добавляем новую задачу в конец списка list
  list.append(newTask);

  // Очищаем поле ввода input
  input.value = "";
};

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-item")) {
    event.target.classList.toggle("strike");
  }
});
