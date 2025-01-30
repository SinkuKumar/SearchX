// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Check localStorage for saved theme preference
    if (localStorage.getItem("theme") === "dark") {
      body.setAttribute("data-bs-theme", "dark");
    }
  
    toggleButton.addEventListener("click", function () {
      let currentTheme = body.getAttribute("data-bs-theme");
      let newTheme = currentTheme === "light" ? "dark" : "light";
  
      body.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme); // Save theme preference
    });
  });
  