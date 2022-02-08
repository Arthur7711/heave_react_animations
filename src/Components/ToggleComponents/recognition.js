import React, { useContext } from "react";
import { MouseContext } from "../custom cursor/mouse-context";
function Recoginition(props) {
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);
	return (
		<>
		{/* <div style={{ display: props.display }} className="item-group"> */}
			<div id="recognition" className="content-group" style={{ display: props.display }}>
				<div className="item-group line_animation2">
					<div className="container text-animation-4">
						<a href="#" className="" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")}>SpotTheSpy – Featured in UI/UX, Behance<div></div></a>
						<a href="#" className="" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")}>Pengi – Featured in UI/UX, Behance<div></div></a>
						<div className="item-highlight-year" data-scroll data-scroll-speed="4.8">2018</div>
						<div className="item-image-container"></div>
						<div className="item-image-container item-image-container2"></div>
					</div>
				</div>
				<div className="item-group line_animation2">
					<div className="container text-animation-4">
						<a href="#" className="" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")}>SpotTheSpy – Featured in Stock, Behance<div></div></a>
						<p className="">MSChristensen – Best Website Designs, Design Rush</p>
						<a href="#" className="" onMouseEnter={() => cursorChangeHandler("hovered2")} onMouseLeave={() => cursorChangeHandler("")}>Pengi – Featured in Stock, Behance<div></div></a>
						<p className="">MSChristensen – Honorable Mention, Awwwards</p>
						<p className="">MSChristensen – Special Kudos, CSS Design Awards</p>
						<div className="item-highlight-year" data-scroll data-scroll-speed="4.8">2017</div>
						<div className="item-image-container"></div>
						<div className="item-image-container item-image-container2"></div>
					</div>
				</div>
				<div className="item-group line_animation2">
					<div className="container text-animation-4">
						<p className="">MSChristensen – Special Kudos, CSS Design Awards</p>
						<p className="">MSChristensen – Featured, Web Design Pub</p>
						<p className="">MSChristensen – Site of the Day, CSS Light</p>
						<div className="item-highlight-year" data-scroll data-scroll-speed="4.8">2016</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Recoginition;