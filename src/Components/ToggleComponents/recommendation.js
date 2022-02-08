import React, {useState, useEffect} from "react";
import { RecommendationData } from "../Data/accordData";
import { Power2 } from "gsap";
import gsap from "gsap";

const Recommendation = (props) => {

	const [data , setdata] = useState(RecommendationData)
	const [Show , setShow] = useState(null);
	useEffect(()=>{
		let innerTabText = document.querySelectorAll('.text-animation-4-heading.item-list.item-list-open .text-animation-4');
		const tTabText = gsap.timeline({});
		tTabText.from(innerTabText, {
			opacity: 0, 
			duration: 0.75, 
			ease: Power2.out, 
			stagger: 0.5
		  }, 0.25);
	});
  
	const toggle = (i) => {
	  if(Show === i){
		return setShow(null) ;
		
	  }
	  setShow(i)
	};



	return (
		<>
			{/* <div className="item-group" id="recommend" style={{ display: props.display }}> */}
			<div  id="recommendations" className="content-list" style={{ display: props.display }}>
			<div className= 'item-list'>
					<div className="container">
						<ul className="item-list-header">
							<li className="text-animation-4-main">Recommendation from</li>
							<li className="text-animation-4-main">Position</li>
							<li className="text-animation-4-main">Where</li>
						</ul>
					</div>
				</div>
				<div id="demo" >
				{
					data.map((curelem, i) => (
						<div className={`text-animation-4-heading ${Show === i ? 'item-list item-list-open' : 'item-list'}`}>
							<div className="container">
							<ul onClick={() => toggle(i)} >
								<li>{curelem.recom_from}</li>
								<li>{curelem.position}</li>
								<li>{curelem.where}</li>
							</ul>
							<div className="item-list-content" >
								<div className="item-list-content-row">
									<h4 className="text-animation-4">Recommendation</h4>
									<p className="text-animation-4">
										{curelem.recom_cont}
									</p>
								</div>
							</div>
							</div>
							<div className="item-list-hover"></div>
						</div>
					))
				}
				</div>
			</div>
		</>
	);
};

export default Recommendation;