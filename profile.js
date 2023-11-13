//activate dark mode

const profileContent = document.querySelector('[data-js="profile-content"]');
const toggleDarkMode = document.querySelector(
  '[data-js="setting-item__dark-mode"]'
);

toggleDarkMode.addEventListener("input", (event) => {
  profileContent.classList.toggle("dark-mode");
});
