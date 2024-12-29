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
  const capitalized = ctg.at(0).toUpperCase() + ctg.substring(1);
  strong.textContent = `[${capitalized}]`;

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

  if (event.target.matches(".edit-btn")) {
    const span = event.target.parentElement.previousElementSibling; // Get the related span
    editInput(span);
  }
});

// Edit button

editInput = (span) => {
  const inputField = document.createElement("input");
  inputField.type = "text";
  const category = createStrong(
    document.querySelector("#categoryDropdown").value
  );
  console.log(category);

  span.innerHTML = "";
  span.appendChild(category);
  span.appendChild(inputField);

  inputField.addEventListener("keydown", function (event) {
    console.log("edited");
    if (event.key === "Enter") {
      span.innerHTML = "";
      const newTaskName = inputField.value.trim();
      span.appendChild(category);
      span.appendChild(document.createTextNode(newTaskName));
    }
  });
  inputField.focus();
};
