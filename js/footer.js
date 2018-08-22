import { red, blue } from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = red;
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
const footer = document.createElement("footer");
bottom.style = blue;

footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };