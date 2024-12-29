`use strict`;

const ul = document.querySelector("#taskList");

const createNewTask = (myTask, categoryTask) => {
  const li = document.createElement("li");
  li.setAttribute("data-category", `${categoryTask}`);

  const span = createSpan(myTask, categoryTask);
  const div = createDiv();

  li.appendChild(span);
  li.appendChild(div);

  ul.appendChild(li);
};

const createSpan = (task, categoryTask) => {
  const span = document.createElement("span");
  span.className = "task-name";
  span.textContent = task;

  const category = createStrong(`${categoryTask}`);
  span.prepend(category);

  return span;
};

const createStrong = (ctg) => {
  const strong = document.createElement("strong");
  strong.className = "task-category";

  strong.textContent = `[${ctg}]`;

  return strong;
};

const taskCategory = () => {};

const createDiv = () => {
  const div = document.createElement("div");
  div.className = "task-actions";

  const button1 = createButton1();
  div.appendChild(button1);

  const button2 = createButton2();
  div.appendChild(button2);
  return div;
};

const createButton1 = () => {
  const button1 = document.createElement("button");
  button1.className = "edit-btn";
  button1.appendChild(document.createTextNode("✏️"));

  return button1;
};

const createButton2 = () => {
  const button2 = document.createElement("button");
  button2.className = "delete-btn";
  button2.appendChild(document.createTextNode("🗑"));

  return button2;
};

// new task clickevent
const addTaskBtn = document.querySelector("#addTaskBtn");

const addTask = function () {
  const task = document.querySelector("#taskInput").value;
  const category = document.querySelector("#categoryDropdown").value;

  createNewTask(task, category);
};

addTaskBtn.addEventListener("click", addTask);

// edit buttom

console.log(document.querySelector("#categoryDropdown").value);

// delete button event
// const deleteBtn = document.querySelectorAll(".delete-btn");
// console.log(deleteBtn);

// deleteBtn.forEach((btn) => {
//   console.log(typeof btn);
//   btn.addEventListener("click", () => {
//     btn.parentElement.parentElement.remove();
//   });
// });

// const taskList = document.querySelector("#taskList");

taskList.addEventListener("click", () => {
  if (event.target.matches(".delete-btn")) {
    const taskItem = event.target.parentElement.parentElement;
    taskItem.remove();
  }
});

// Edit button
const editBtn = document.querySelector(".edit-btn");

editInput = () => {
  const span = document.querySelector(".task-name");
  const newTask = (span.innerHTML = `<input type="text">`);
};
editBtn.addEventListener("click", editInput);
