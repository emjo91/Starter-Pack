import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";
import makeImage from "./image.js";
import imageUrl from "./helo.jpg";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A button.");
button.style = makeColorStyle("#bada55");

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);