const toggleBtn = document.getElementById("toggleMode");
const colorLabel = document.getElementById("colorLabel");
const logoImg = document.getElementById("logoImg");

const themes = {
  light: {
    bg: "#ecf0f1",
    text: "#2c3e50",
    logo: "logo-dark.png",
  },
  dark: {
    bg: "#2c3e50",
    text: "#ecf0f1",
    logo: "logo-light.png",
  },
};

// Utility: Apply theme visuals
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);

  // Update visuals
  colorLabel.textContent = themes[theme].bg;
  logoImg.src = themes[theme].logo;
  localStorage.setItem("theme", theme);
}

// On load: apply saved or default theme
let currentTheme = localStorage.getItem("theme") || "light";
applyTheme(currentTheme);

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
});
