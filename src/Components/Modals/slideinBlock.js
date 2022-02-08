import React, { useState, useRef } from "react";
import { Power1, Power2} from "gsap";
import PDF from "../../assets/resume/MSChristensen-resume.pdf";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
function SlideinBlock(props) {

	// Cookie block
	const cookBlock = (e) => {
		e.preventDefault();
		let elem = document.getElementById('block-cookie');
		if(elem !== null){
			elem.classList.add("block_cookie_active");
		}
		let fade= document.getElementById('block-contact');
		if ( fade !== null){
			fade.classList.add("fadeout");
		}
		let tf = gsap.timeline();
		tf.from(".cookie-text-animation-3", 0.5,{
		  duration: 2,
		  opacity: 0,
		  y: "50px",
		  rotationX: 0,
		  transformOrigin: "bottom",
		  ease: Power1.easeOut,
		  stagger: 0.01
		},2 );
			  // animation 4
			let slideboxFade =  document.querySelectorAll('.cookie_fadein');
			let tg = gsap.timeline({});
			tg.from(slideboxFade, 0.75, {
			  opacity: 0, 
			  duration: 5, 
			  ease: Power2.out, 
			  stagger: 0.2
		  }, 3);
		// animation 4
			let slideboxFade2 =  document.querySelectorAll('.fadeout');
			let td = gsap.timeline({});
			td.to(slideboxFade2, 0.75, {
			  opacity: 0,
			  duration: 5, 
			  ease: Power2.out, 
			  stagger: 0.2
		  }, 0.5);
	};
	const closeBtn = () => {
		let cookie = document.getElementById('block-cookie');
		if(cookie !== null){
			cookie.classList.remove("block_cookie_active");
		};
		let elem = document.getElementById('slide_box');
		if (elem !== null){
			elem.classList.remove("slide_block_active");
			elem.classList.remove("cookie_block_active");
		};
		let fade= document.getElementById('block-contact');
		if ( fade !== null){
			fade.classList.remove("fadeout");
		}

		fade.style.opacity = "1";
	} 
	return (
		<>
			<div id="slide_box" className= {` slidein-block ${props.sidebar_cook}`}>
				<div className="slideinoverlay"></div>
				<div className="close-slidein-block">
					<div className="icon-close" onClick={closeBtn}></div>
				</div>
				<div id="block-contact" className={`slide-container`}>
					<h3 className="hahmlet alternative animay">Together we can create the experiences that matter and make sense</h3>
					<div className="item_contact_box">
						<div className="item-contact ">
							<h4 className="slide_fadein">Mail</h4>
							<a href="#" className="button-gradient-reversed slide_fadein">morten.s.christensen@gmail.com</a>
						</div>
						<div className="item-contact">
							<h4 className="slide_fadein">Resume</h4>
							<a href={PDF} target="_blank" className="slide_fadein button-gradient-reversed">View me resume</a>
						</div>
						<div className="item-contact">
							<h4 className="slide_fadein">Cookie usage</h4>
							<a href="#" className="slide_fadein button-gradient-reversed" onClick={cookBlock}>Cookie policy</a>
						</div>
					</div>
				</div>
				<div id="block-cookie" className={`slide-container` }>
				{/* <div className="close-slidein-block footer-cookie-hidden">
					<div className="icon-close" onClick={ props.closeCookieBtn}></div>
				</div> */}
					<h2 className="hahmlet alternative cookie-text-animation-3">Cookie policy</h2>
					<div className="cookie_fadein">
					<p>This is the Cookie Policy for MSChristensen.com, accessible from https://mschristensen.com. Scroll in this block to view the full extend of the policy.</p>
					<h3>What are cookies?</h3>
					<p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how I use it and why I sometimes need to store these cookies. I will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
					<h3>How I use cookies</h3>
					<p>I use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
					<h3>Disabling cookies</h3>
					<p>
						You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the Cookies Policy Generator from 
						<a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/" target="_blank" className="button-gradient-reversed">CookiePolicyGenerator.com.</a>
					</p>
					<h3>The cookies I set</h3>
					<p>Site preferences cookies: In order to provide you with a great experience on this site I provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences I need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
					<h3>Third party cookies</h3>
					<p>
						In some special cases I also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
						<br/><br/>
						This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping me to understand how you use the site and ways that I can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so I can continue to produce engaging content.
						<br/><br/>
						For more information on Google Analytics cookies, see the official Google Analytics page.
						<br/><br/>
						From time to time I test new features and make subtle changes to the way that the site is delivered. When new features are still being tested these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring I understand which optimisations our users appreciate the most.
					</p>
					<h3>More information</h3>
					<p>
						Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
						<br/><br/>
						However if you are still looking for more information then you can contact us through email:
						<br/><br/>
						<strong>morten.s.christensen@gmail.com</strong>
					</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default SlideinBlock;