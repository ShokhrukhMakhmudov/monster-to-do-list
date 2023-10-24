import { elThemeChangerButtonImg, html } from "./html-elements.js";

// Theme toggler
const themeChanger = () => {
  if (html.classList.contains("dark")) {
    elThemeChangerButtonImg.src =
      location.origin + elThemeChangerButtonImg.dataset.moon;
    html.classList.remove("dark");
    localStorage.setItem("mode", "light");
  } else {
    elThemeChangerButtonImg.src =
      location.origin + elThemeChangerButtonImg.dataset.shine;
    html.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }
};

export default themeChanger;
