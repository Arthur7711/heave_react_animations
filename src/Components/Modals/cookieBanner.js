import React, { useRef } from "react";

function CookieBanner() {
	// recoDisplay
	let screen = useRef(null);
	let body = useRef(null);
	
	return (
		<>
			<div className="cookie-banner">
				<div className="container">
					<h2>
						Hello there! My website uses cookies to enhance your experience. By visiting my site you accept my  
						<a href="#"> use of cookies</a>
						.
					</h2>
				</div>
				{/* <img src={require("./../../assets/images/other/mschristensen-cookies.webp").default} alt="" /> */}
				<div className="cookie-background"></div>
			</div>
		</>
	);
}

export default CookieBanner;