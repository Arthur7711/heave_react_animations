import React, { useState, useEffect } from "react";
import accordData from "../Data/accordData";
import { Power2 } from "gsap";
import gsap from "gsap";

const Experience = (props) => {
	
	const [data , setdata] = useState(accordData)
	const [Show , setShow] = useState(null);
	useEffect(()=>{
		let expinnerTabText = document.querySelectorAll('.text-animation-4-heading.item-list.item-list-open .text-animation-4');
		const tExpTabText = gsap.timeline({});
		tExpTabText.from(expinnerTabText, {
			opacity: 0, 
			duration: 0.75, 
			ease: Power2.out, 
			stagger: 0.5
		  }, 0.25);
	});
  
	const toggle = (i) => {
	  if(Show === i){
		return  setShow(null) 
	  }
	  setShow(i)
	};

	return (
		<>

			{/* <div style={{ display: props.display }} className="item-group" name="exp"> */}
			<div id="experience" className="content-list" name="exp" style={{ display: props.display }}>
			<div className="item-list line-animation2">
					<div className="container">
						<ul className="item-list-header ">
							<li className="text-animation-4-main">Position</li>
							<li className="text-animation-4-main">Where</li>
							<li className="text-animation-4-main">When</li>
						</ul>
					</div>
				</div>
				{
					data.map((curelem, i) => (
						<div className={`text-animation-4-heading ${Show === i ? 'item-list item-list-open' : 'item-list '}`}>
							<div className="container">
							<ul onClick={() => toggle(i)}>
								<li>{curelem.position}</li>
								<li>{curelem.where}</li>
								<li>{curelem.when}</li>
							</ul>
							<div className="item-list-content" >
								<div className="item-list-content-row">
								<h4 className="text-animation-4">Description & Learnings</h4>
								<p className="text-animation-4">{curelem.desc_text}</p>
								</div>
								<div className="item-list-content-row">
								<h4 className="text-animation-4">Focus & Role</h4>
								<p className="text-animation-4">{curelem.focus_role}</p>
								</div>
								<div className="item-list-content-row">
								<h4 className="text-animation-4">Clients</h4>
								<p className="text-animation-4">{curelem.client_info}</p>
								</div>
							</div>
							</div>
							<div className="item-list-hover"></div>
						</div>
					))
				}
			</div>
		</>
	);
};

export default Experience;