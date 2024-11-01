// mainnavdiv.js

function openIframeContent(url) {
    if (url) {
        window.location.href = url; // Navigate to the new URL
        console.log("Navigating to: " + url);
    }
}


// Function to load the theme from local storage
const loadDataFromLocalStorage = () => {
    const isLightMode = (localStorage.getItem("themeColor") === "light_mode");
    document.body.classList.toggle("light_mode", isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
}

// Toggle between light and dark themes
const toggleThemeButton = document.querySelector("#theme-toggle-button");

toggleThemeButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light_mode");
    localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});

// Load theme data on page load
loadDataFromLocalStorage();

console.log('headerdiv 777');

/*
// Load theme and chat data from local storage on page load
const loadDataFromLocalstorage = () => {
    const isLightMode = (localStorage.getItem("themeColor") === "light_mode");
}
    // Apply the stored theme
    document.body.classList.toggle("light_mode", isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

const toggleThemeButton = document.querySelector("#theme-toggle-button");


  // Toggle between light and dark themes
toggleThemeButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light_mode");
    localStorage.setItem("themeColor", isLightMode ? "light_mode" : "dark_mode");
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
  });

  loadDataFromLocalstorage(); */