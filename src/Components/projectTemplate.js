import React, { useEffect, useRef, useState } from "react";
import Gallery from "./SharedComponent/Gallary";
import SlideinBlock from "./Modals/slideinBlock";
import { TweenMax, TimelineMax, Power3, Power4, Power1, Power2 } from "gsap";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
function ProjectTemplate() {
	let screen = useRef(null);
	let body = useRef(null);

	useEffect(() => {
		var tl = new TimelineMax();
			tl.to(screen, {
			duration: 1,
			height: "100%",
			ease: Power3.easeInOut,
		});
		tl.to(screen, {
			duration: 1,
			top: "0%",
			ease: Power3.easeInOut,
			delay: 0.2,
			borderTopLeftRadius: "0",
			borderTopRightRadius: "0",
		});
		tl.to(screen, {
			duration: 1,
			height: "0%",
			ease: Power3.easeInOut,
			delay: 0.6,
			borderBottomLeftRadius: "0",
			borderBottomRightRadius: "0",
		});
		TweenMax.to(body, 0.3, {
			css: {
				opacity: "1",
				pointerEvents: "auto",
				ease: Power4.easeInOut,
			},
		}).delay(2);
		return () => {
			TweenMax.to(body, 1, {
				css: {
					opacity: "0",
					pointerEvents: "none",
				},
			});
		};
	}, []);

	// Open contact info 
	const [menuActive, setmneuActive] = useState(false);
	const menu_act = (e) => {
		e.preventDefault();
			setmneuActive(!menuActive);
			
			let slidebox_animate = new SplitText(document.querySelectorAll('.animay'), {type: "lines, words, chars"});
			const textanimate = slidebox_animate.words;
			// the function uses gsap tweens 
			// for the animation and refs to select     // the DOM node to animate 
			let tf = gsap.timeline();
			  tf.from(textanimate, 0.5,{
				duration: 2,
				opacity: 0,
				y: "50px",
				rotationX: 0,
				transformOrigin: "bottom",
				ease: Power1.easeOut,
				stagger: 0.01
			  },1 );

			  // animation 4
			let slidebox_fade =  document.querySelectorAll('.slide_text_animation_4');
			let tg = gsap.timeline({});
			tg.from(slidebox_fade, 0.75, {
			  opacity: 0, 
			  duration: 5, 
			  ease: Power2.out, 
			  stagger: 0.2
		  }, 2);
	};
	// On load gallary refresh



	 

	// horizontel scroll and lightbox

	const image1 =
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-1.png";
  const image2 =
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-2.png";
  const image3 =
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-1.png";
  const image4 =
	"https://mschristensen.com/demosites/portfolio/assets/images/other/mschristensen-ux-mockup-4.jpg";
  const image5 =
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-1.png";
  const image6 =
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-2.png";
  const image7 = 
	"https://mschristensen.com/demosites/portfolio/assets/img/spotthespy_app_mockup-1.png";
  const image8 = 
	"https://mschristensen.com/demosites/portfolio/assets/img/mockup-small.jpg";
  
  
  //IMAGE ARRAY
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];

	  const [imageToShow , setimageToShow] = useState("");
	  const [lightboxDisplay, setlightboxDisplay] = useState(false);
		//looping through our images array to create img elements
		const imageCards = images.map((image) => (
		  <div className="light_box_imgs">
			  <img className="image_card" onClick={() => showImage(image)} src={image} />
			  </div>
		));
		const showImage = (image) => {
		  setimageToShow(image);
		  setlightboxDisplay(true);
		};
  
		const hideLightBox = () => {
		  setlightboxDisplay(false);
		};
  
		const showNext = (e) => {
		  e.stopPropagation();
		  let currentIndex = images.indexOf(imageToShow);
		  if (currentIndex >= images.length - 1) {
			  setlightboxDisplay(false);
		  } else {
			let nextImage = images[currentIndex + 1];
			  setimageToShow(nextImage);
		  }
		};
  
		const showPrev = (e) => {
		  e.stopPropagation();
		  let currentIndex = images.indexOf(imageToShow);
		  if (currentIndex <= 0) {
			  setlightboxDisplay(false);
		  } else {
			let nextImage = images[currentIndex - 1];
			setimageToShow(nextImage);
		  }
		};


	return (
		<>
				<SlideinBlock sideblock_class={`${menuActive ? 'slidein-block  slide_block_active' :"slidein-block "}`} close_btn={() => setmneuActive(!menuActive)} />
		<section className="lightbox_sec" >
			{
				lightboxDisplay ? 
					<div id="lightbox" onClick={hideLightBox}>
						<div className="lightbox_wrap">
							<button onClick={showPrev}>⭠</button>
							<div className="light_box_img_model">
								<img id="lightbox-img" src={imageToShow}></img>
							</div>
							<button onClick={showNext}>⭢</button>
						</div>
					</div>
				: ""
			}
		</section>

			{/* Grids for mobile, tablet, laptop/desktop, and large screens */}
			{/* <div className="display-grid mobile">
				<p></p><p></p>
			</div> */}
			{/* <div className="display-grid tablet">
				<p></p><p></p><p></p><p></p>
			</div> */}
			{/* <div className="display-grid desktop">
				<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
			</div> */}
			{/* <div className="display-grid large-desktop">
				<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
			</div> */}

			<div className="load-container">
				<div className="load-screen1" ref={(el) => (screen = el)}></div>
			</div>
			<main className="Contact">
				<div ref={(el) => (body = el)} className="Headd">

					<section className="project-introduction" data-scroll-section>
						<div className="container">
							<h1 className="mollie line_animation2" data-scroll data-scroll-speed="0.5"><span className="text-animation-1">Project template</span></h1>
							<h2 className="hahmlet line_animation2" data-scroll data-scroll-speed="2"><span className="text-animation-2">Project catchphrase lorem ipsim dolor sit</span></h2>
						</div>
						<div className="scroll-down"></div>
					</section>
					<section id="scroll-gallery-top" className="scroll-gallery" style={{ backgroundColor: "#384148" }} data-scroll-section>
						<div className="sg-wrapper">
							<div className="sg-row" data-scroll data-scroll-speed="1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-01.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-02.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-03.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-04.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="-1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-07.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-08.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-09.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-10.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-11.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-12.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-04.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-07.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-08.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-09.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="-1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-11.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-12.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-13.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-14.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-15.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-16.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-17.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-18.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-19.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-20.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="-1" data-scroll-target="#scroll-gallery-top" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-01.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-02.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-03.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-04.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
							</div>
						</div>
					</section>
					<section className="sticky-section" data-scroll-section>
						<div id="project-insights" className="container">
							<div className="sticky-content line_animation2" data-scroll data-scroll-sticky data-scroll-target="#project-insights" data-scroll-delay="0.5">
								<h2 className="mollie project-title text-animation1">Project insights</h2>
							</div>
							<div className="normal-content" data-scroll>
								<p className="hahmlet content-large">Spotthespy is a security application that helps the consumer gain awareness about their digital security options for their email or social media accounts. Should an intruder try to get in, then the consumer will receive an immediate alert allowing them to react instantly.</p>
								<ul className="listed-insights">
									<li>
										<h4>Recognition</h4>
										<p>Featured in UX/UI, Behance</p>
										<p>Featured in Stock, Behance</p>
									</li>
									<li>
										<h4>Deliverables</h4>
										<p>Art and Creative Direction, Brand/Visual Identity, Digital Brand Transformation, Creation and Ideation, Concept Development, Prototyping, Responsive Design, User Interface Design (UI), User Experience Design (UX), Visual Content</p>
									</li>
									<li>
										<h4>Where and when</h4>
										<p>LinkFactory, 2019</p>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="background-section" style={{ backgroundColor: "#384148" }} data-scroll-section>
						<section className="lightbox_sec" >
						<div className="scroll-carousel" id="content">
							<div className="pin_wrap">
							{imageCards}
							</div>
							</div>
						</section>
						<section className="sticky-section project-details project-details-white">
							<div id="project-details" className="container">
								<div className="sticky-content line_animation2" data-scroll data-scroll-sticky data-scroll-target="#project-details" data-scroll-delay="0.5">
									<h2 className="mollie project-title text-animation1">Project details</h2>
								</div>
								<div className="normal-content" data-scroll>
									<h4>Objective</h4>
									<p className="content-large extralight">Enhance their digitial presence with a new brand identity alongside a modern direction in order to inquire consumers and meet their requirements.</p>
									<h4>Solution</h4>
									<p className="content-large extralight">Revising their structure backed by consumers was the beginning towards attaining the knowledge to redesign Spotthespy’s brand identity and digital transformation.</p>
								</div>
							</div>
						</section>
						<section className="sticky-section project-sticky-gallery">
							<div id="project-gallery" className="container">
								<div className="sticky-content content-gallery content-gallery-left">
									<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-sticky-gallery-01.webp").default} alt="" data-scroll data-scroll-sticky data-scroll-target="#project-gallery" data-scroll-delay="0.5" />
								</div>
								<div className="normal-content content-gallery content-gallery-right">
									<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-sticky-gallery-02.webp").default} alt="" />
									<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-sticky-gallery-03.webp").default} alt="" />
									<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-sticky-gallery-04.webp").default} alt="" />
								</div>
							</div>
						</section>
					</section>
					<section className="parallax-image" data-scroll-section>
						<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-parallax.webp").default} alt="" data-scroll data-scroll-speed="-3" />
					</section>
					<section className="styleguide" data-scroll-section>
						<div className="container">
							<div className="line_animation2">
								<h2 className="mollie project-title text-animation-1">Color palette and typography</h2>	
								</div>
								<div className="line_animation2">
							<ul className="color-palette text-animation-4">
								<li>
									<h4>Color palette</h4>
								</li>
								<li>
									<div style={{backgroundColor: "#ffffff", border: "2px solid #ededed",}}></div>
									<div style={{ backgroundColor: "#333333" }}></div>
									<div style={{ backgroundColor: "#B92E39" }}></div>
									<div style={{ backgroundColor: "#06357E" }}></div>
								</li>
							</ul>
							<ul className="typography text-animation-4">
								<li>
									<h4>Typography</h4>
									<h4 className="indicator">Lato Bold, Regular & Light</h4>
								</li>
								<li>
									<ul>
										<li>
											<p>ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ</p>
											<p>abcdefghijklmnopqrstuvwxyzæøå</p>
											<p>01234567890&%!?/()[]$.;,+=-</p>
										</li>
										<li>
											<p>ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ</p>
											<p>abcdefghijklmnopqrstuvwxyzæøå</p>
											<p>01234567890&%!?/()[]$.;,+=-</p>
										</li>
										<li>
											<p>ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ</p>
											<p>abcdefghijklmnopqrstuvwxyzæøå</p>
											<p>01234567890&%!?/()[]$.;,+=-</p>
										</li>
									</ul>
								</li>
							</ul>
							</div>
						</div>
					</section>
					<section id="scroll-gallery-bottom" className="scroll-gallery alternative" data-scroll-section>
					<div className="sg-wrapper">
							<div className="sg-row" data-scroll data-scroll-speed="1" data-scroll-target="#scroll-gallery-bottom" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-01.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-02.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-03.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-04.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="-1" data-scroll-target="#scroll-gallery-bottom" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-07.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-08.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-09.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-10.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-11.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-12.webp").default} alt="" />
								</div>
							</div>
							<div className="sg-row" data-scroll data-scroll-speed="1" data-scroll-target="#scroll-gallery-bottom" data-scroll-direction="horizontal">
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-04.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-05.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-06.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-07.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-08.webp").default} alt="" />
								</div>
								<div className="sg-image">
									<img src={require("../assets/images/projects/spotthespy/scroll-gallery/mschristensen-spotthespy-gallery-09.webp").default} alt="" />
								</div>
							</div>
						</div>
					</section>
					<section className="scroll-carousel" data-scroll-section></section>
					<section className="project-footer" data-scroll-section>
						<div className="container">
						<div className="line_animation2">
							<h4 className="text-animation-4">Got a project?</h4>
							</div>
							<div className="line_animation2">
							<h2 className="mollie text-animation-3">Ready to work together? I am always available for a chat, wherever you are in the world...</h2>
							</div>
							<div className="line_animation2">
							<a className="button-liquid text-animation-4" onClick={menu_act}>
								<span>Get in touch</span>
								<div className="liquid"></div>
							</a>
							</div>
						</div>
					</section>
					<section className="next-project" data-scroll-section>
						<div className="container">
						<div className="line_animation2">
							<h4 className="text-animation-4">Next project</h4>
							</div>
							<div className="line_animation2">
								<h2 className="hahmlet text-animation-3">Project title for the next project</h2>
								<p className="content-large text-animation-2">Catchphrase for the next project. This is going to be awesome!</p>
							</div>
						</div>
						<div className="background-container">
							<img src={require("../assets/images/projects/spotthespy/mschristensen-spotthespy-parallax.webp").default} alt="" />
						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default ProjectTemplate;