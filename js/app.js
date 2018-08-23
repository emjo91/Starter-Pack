import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";

const button = makeButton("Yay! A button.");
button.style = makeColorStyle("#bada55");

document.body.appendChild(button);
document.body.appendChild(footer);