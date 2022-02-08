import React, {useContext, useState } from "react";
import { MouseContext } from "../custom cursor/mouse-context";
import PDF from "../../assets/resume/MSChristensen-resume.pdf";

function Footer(props) {
	const {  cursorChangeHandler } = useContext(MouseContext);
  	return (
		<footer data-scroll-section className="line_animation2">
			<div className="container">
				<h3 className="alternative text-animation-3">Morten.s.christensen@gmail.com</h3>
				<ul className="text-animation-4">
					<li><a href={PDF} target="_blank" className=" button-gradient-reversed" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")}>View or download my resume</a></li>
					<li><a className="button-gradient-reversed" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")} onClick={props.cookie_btn}>Cookie policy</a></li>
				</ul>
			</div>
		</footer>
  	);
}

export default Footer;