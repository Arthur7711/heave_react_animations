import React, { useState, useContext, useEffect } from "react";
import { MouseContext } from "../custom cursor/mouse-context";
// import {Link} from "react-router-dom";

function Header(props) {
	const { cursorChangeHandler } = useContext(MouseContext);
	const [aboutKey, setAboutKey] = useState(true);
	const [workKey, setWorkKey] = useState(false);
	const [contactKey, setContactKey] = useState(false);

	const activate = (e, key) => {
		e.preventDefault();
	
		switch (key) {
			case "about":
				setWorkKey(false);
				setAboutKey(true);
				setContactKey(false);
				// props.history.push('/')
				break;
			case "work":
				setWorkKey(true);
				setAboutKey(false);
				setContactKey(false);
				// props.history.push('/work')
				break;
			case "contact":
				setWorkKey(false);
				setAboutKey(false);
				setContactKey(true);
				break;
			default:
				break;
		}
	};

	return (
		<>
		<header data-scroll data-scroll-sticky data-scroll-target="#body">
			<div className="header-wrapper">
			<div className="progress" max="500" value="0"><span></span></div>
				<a className="logo" href="/"><div id="logo-icon" onMouseEnter={() => cursorChangeHandler("empty_ring")} onMouseLeave={() => cursorChangeHandler("")}></div></a>
				<nav className="navigation-main">
					<a className={aboutKey ? "active" : ""} href="/" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>About</a>
					<a className={workKey ? "active" : ""} href="/work" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Work</a>
					{/* <Link exact activeClassName="active" to='/' onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onClick={handleRemoveItem}>About</Link>
                	<Link activeClassName="active" to='/work' onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} >Work</Link> */}
					<a className={props.header_active} id="animate" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onClick={props.menu_click}>Contact</a>

					{/* <a className={workKey ? "active" : ""} href="/locomotive-scroll">scroll</a> */}
				</nav>
				<nav className="navigation-some">
					<a href="https://www.linkedin.com/in/mortenstigchristensen/" target="_blank" onMouseEnter={() => cursorChangeHandler("empty_ring")} onMouseLeave={() => cursorChangeHandler("")}><div className="icon linkedin"></div></a>
					<a href="https://www.behance.net/mortenschristensen41" target="_blank" onMouseEnter={() => cursorChangeHandler("empty_ring")} onMouseLeave={() => cursorChangeHandler("")}><div className="icon behance"></div></a>
				</nav>
			</div>
		</header>
		</>
	);
}

export default Header;