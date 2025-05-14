// Animate Box
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.add("animate");

  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
});

// Theme Toggle with Local Storage
const themeBtn = document.getElementById("toggleTheme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Apply Saved Theme on Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});