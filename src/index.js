import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

import "./style.css";

Home();
// Menu();
// Contact();

const nav = document.querySelector("#nav");
const content = document.querySelector("#content");
nav.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    content.classList.remove("menu-content");
    content.classList.remove("contact-content");

    Home();
  } else if (e.target.id === "menu") {
    content.classList.add("menu-content");
    content.classList.remove("contact-content");
    Menu();
  } else if (e.target.id === "contact") {
    content.classList.remove("menu-content");
    content.classList.add("contact-content");
    Contact();
  }
});

content.addEventListener("click", (e) => {
  if (e.target.id === "menu") {
    content.classList.add("menu-content");
    content.classList.remove("contact-content");

    Menu();
  }
});
