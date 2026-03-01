// Theme toggle
const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const root = document.documentElement;

toggle.addEventListener("click", () => {
    root.classList.toggle("light");
    const isLight = root.classList.contains("light");
    icon.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Al cargar
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    root.classList.add("light");
    icon.textContent = "☀️";
}

// Mobile menu toggle
const menuBtn = document.getElementById('menuToggle'); // botón hamburguesa
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 30) {
    header.classList.add('bg-[var(--bg-card)]', 'shadow-md');
  } else {
    header.classList.remove('bg-[var(--bg-card)]', 'shadow-md');
  }
});
