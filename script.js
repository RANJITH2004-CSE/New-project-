// Redirect if not logged in
if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
  };
}

// Add task
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;
  const li = document.createElement("li");
  li.className = "bg-white dark:bg-gray-700 p-3 rounded shadow flex items-center gap-2";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => {
    li.classList.toggle("line-through");
    li.classList.toggle("opacity-60");
  };
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task));
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Attendance Chart
const chartEl = document.getElementById("attendanceChart");
if (chartEl) {
  const ctx = chartEl.getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Present", "Absent"],
      datasets: [{
        data: [90, 10],
        backgroundColor: ["#16a34a", "#dc2626"]
      }]
    }
  });
}
