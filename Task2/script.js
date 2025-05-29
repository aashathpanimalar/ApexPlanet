
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill all required fields.");
    return;
  }

  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});

function addTask() {
  let input = document.getElementById("todoInput");
  let task = input.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.style.marginLeft = "10px";
  removeBtn.style.background = "red";
  removeBtn.style.color = "white";
  removeBtn.style.border = "none";
  removeBtn.style.cursor = "pointer";

  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
