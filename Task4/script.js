function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => removeTask(index);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

document.addEventListener("DOMContentLoaded", renderTasks);
