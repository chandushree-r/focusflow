const habitInput = document.getElementById("habitInput");
const habitList = document.getElementById("habitList");

function addHabit() {
  const habitText = habitInput.value.trim();
  if (habitText === "") return;

  const li = document.createElement("li");
  li.className = "habit-item";

  li.innerHTML = `
    <span>${habitText}</span>
    <div class="habit-buttons">
      <button class="complete-btn" onclick="markComplete(this)">Done</button>
      <button class="delete-btn" onclick="deleteHabit(this)">Delete</button>
    </div>
  `;

  habitList.appendChild(li);
  habitInput.value = "";
}

function markComplete(button) {
  const item = button.closest(".habit-item");
  item.classList.toggle("completed");
}

function deleteHabit(button) {
  const item = button.closest(".habit-item");
  item.remove();
}
