import nav from "./nav";
const getFooter = () => import(/* webpackChunkName: "footer" */"./footer");
const getGSAP = () => import("gsap");
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import css from "./footer.css";
import makeImage from "./image.js";
import imageUrl from "./helo.jpg";

const setButtonStyle = (color) => import(`./button-styles/${color}`);

const image = makeImage(imageUrl);
const button = makeButton("Yay! A button.");
button.style = makeColorStyle("#bada55");

document.body.appendChild(button);

button.addEventListener("click", e => {

	getFooter().then(footerModule => {
		document.body.appendChild(footerModule.footer);
	});

	getGSAP().then(gsap => {
		console.log(gsap);
	});

	setButtonStyle("red").then(styleStr => {
		console.log(styleStr.default);
		button.style = styleStr.default;
	});
});

document.body.appendChild(image);
