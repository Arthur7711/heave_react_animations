import React, { useState, useEffect, useRef, useContext } from "react";
import Footer from "./Layout/footer";
import { TweenMax, TimelineMax, Power3, Power4, Power2 } from "gsap";
import AboutIntroduction from "./SharedComponent/AboutIntroduction";
import Recoginition from "./ToggleComponents/recognition";
import Experience from "./ToggleComponents/experience";
import Recommendation from "./ToggleComponents/recommendation";
import Cursor from "./custom cursor/Cursor";
import { MouseContext } from "./custom cursor/mouse-context";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import PDF from "../assets/resume/MSChristensen-resume.pdf";
import Vimeo from '@u-wave/react-vimeo';
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

function About(props) {
  const [recogDisplay, setrecogDisplay] = useState("");
  const [expDisplay, setexpDisplay] = useState("none");
  const [recoDisplay, setrecoDisplay] = useState("none");

  // recoDisplay
  let screen = useRef(null);
  let body = useRef(null);

  // Page transition
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
    // tl.set(screen, { left: "-100%" });
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

  // Toggle handler
  const recref = useRef();
  useEffect(() => {
    const width = recref.current.offsetWidth;
    console.log(width);
    TweenMax.set('.navigation-underline', {
      css:{width: width, x: 200, y: 0}
    }, )
    const activeTabList = document.getElementsByClassName("toggle_active");
    var ctm_attr = document.createAttribute("ref");
    ctm_attr.value = {recref};
  });


  const ToggleHandler = (e) => {
    let tab_navigate = document.getElementById("myDIV");
    tab_navigate.classList.add("Helo");
    const animate_line = setTimeout(() => {
      tab_navigate.classList.remove("Helo");
    }, 1000);
    e.preventDefault();
    const { name } = e.target;
    const {className} = e.target;
    const tablinks = document.getElementsByClassName("toggle_btns");
    if({ name } === "experience")
    {
      tablinks[0].classList.add("toggle_active");
    }

    // console.log(name, e.type);
    switch (name) {
      case "recognition":
        setrecogDisplay("");
        setexpDisplay("none");
        setrecoDisplay("none");
        tablinks[0].classList.add("toggle_active");
        tablinks[1].classList.remove("toggle_active");
        tablinks[2].classList.remove("toggle_active");

        break;
      case "experience":
        setrecogDisplay("none");
        setexpDisplay("");
        setrecoDisplay("none");
        tablinks[0].classList.remove("toggle_active");
        tablinks[1].classList.add("toggle_active");
        tablinks[2].classList.remove("toggle_active");

        // fadein animation on click
        let experience_fadein2 =  document.querySelectorAll('#experience .item-list-header .text-animation-4-main');
        let texperience2 = gsap.timeline({});
        texperience2.from(experience_fadein2, 0.75, {
          opacity: 0, 
          duration: 10, 
          ease: Power2.out, 
          stagger: 0.5
        }, 0.5);
        let experience_fadein =  document.querySelectorAll('#experience .text-animation-4-heading');
        let texperience = gsap.timeline({});
        texperience.from(experience_fadein, 0.75, {
          opacity: 0, 
          duration: 10, 
          ease: Power2.out, 
          stagger: 0.5
        }, 2);        
        
        break;
      case "recommendations":
        setrecogDisplay("none");
        setexpDisplay("none");
        setrecoDisplay("");
        tablinks[0].classList.remove("toggle_active");
        tablinks[1].classList.remove("toggle_active");
        tablinks[2].classList.add("toggle_active");
                // fadein animation on click
                let recommend_fade2 =  document.querySelectorAll('#recommendations .item-list-header .text-animation-4-main');
                let trecommend_fade2 = gsap.timeline({});
                trecommend_fade2.from(recommend_fade2, 0.75, {
                  opacity: 0, 
                  duration: 10, 
                  ease: Power2.out, 
                  stagger: 0.5
                }, 0.5);
                let recommend_fade =  document.querySelectorAll('#recommendations .text-animation-4-heading');
                let trecommend_fade = gsap.timeline({});
                trecommend_fade.from(recommend_fade, 0.75, {
                  opacity: 0, 
                  duration: 10, 
                  ease: Power2.out, 
                  stagger: 0.5
                }, 2); 

        break;
    }

  };
  


  // Load content on mobile
  const [ContLoad, setContLoad] = useState();
  const load_cont = () => {
    setContLoad(true);
    // animation 4
    let slidebox_fade =  document.querySelectorAll('.mbl_text');
    let tg = gsap.timeline({});
    tg.from(slidebox_fade, 0.75, {
      opacity: 0, 
      duration: 5, 
      ease: Power2.out, 
      stagger: 0.05
    });
  };
  const [ContLoad2, setContLoad2] = useState();
  const load_cont2 = () => {
    setContLoad2(true);
    // animation 4
    let slidebox_fade =  document.querySelectorAll('.mbl_text');
    let tg = gsap.timeline({});
    tg.from(slidebox_fade, 0.75, {
      opacity: 0, 
      duration: 5, 
      ease: Power2.out, 
      stagger: 0.05
    });
  };

  //Custom Cursor Code
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  // Video Popup
  const video = "https://player.vimeo.com/video/225519343?h=a9a924c301&autoplay=1&loop=1&title=0&byline=0&portrait=0";
  const [videoToShow , setvideoToShow] = useState("");
  const [videoDisplay, setvideoDisplay] = useState(false);
  const showVideo = (video) =>{
    setvideoToShow(video);
    setvideoDisplay(true);
  }
  const hideLightBox = () => {
    setvideoDisplay(false);
  };
  const getref = useRef(".toggle_active");
  const widthval = ('width', getref.current ? getref.current.offsetWidth : 0 + "px");
  const line = {
    width: widthval
  }

  // Tab animated underline
  



  // Page content
  return (
    <>
    		<section className="lightbox-video" >
        {
				videoDisplay ? 
					<div id="video-popup-model" onClick={hideLightBox}>
						<div className="lightbox-video-wrap">
							<div className="light_box_img_model">
                <iframe src={videoToShow} width="1400" height="900" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; fullscreen; picture-in-picture"> </iframe>
							</div>
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
      <Cursor />
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}></div>
      </div>
      <main className="Contact">
        <div ref={(el) => (body = el)} className="Headd">
          <AboutIntroduction />
          {/* Video Section */}
          <section className="media is-inview" data-scroll-section data-scroll>
          <button className="videop-popup">
            <iframe src={`${video}&muted=1&#t=70s`} width="1400" height="900" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; fullscreen; picture-in-picture"> </iframe>
            <div className="video_overlay" onClick={() => showVideo(video)}></div>
          </button>
          </section>
          <section
            className="sticky-section"
            data-scroll-section
            data-scroll
            id="about_sec3"
          >
            <div id="biography" className="container">
              <div
                className="sticky-content"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#biography"
                data-scroll-delay="0.5"
              >
                <div className="line_animation2">
                  <h2 className="mollie main_text text-animation-3">
                    Living and working from Copenhagen, but I am openly looking
                    for a full-time position in Osaka or Tokyo, Japan.
                  </h2>
                </div>
              </div>
              <div className="normal-content about_sec3_cont" data-scroll>
                <p className="">
                  I love my field of work and building a concept from the bottom
                  to execution or from the current state into today’s standards
                  and beyond. I am a user-centric designer, always thinking from
                  the consumer’s perspective, inviting them into an amazing
                  experience and journey. My past has given me the knowledge and
                  insights to produce solutions with high efficiency,
                  creativity, and quality.
                </p>
                <a
                  className={
                    ContLoad
                      ? "button-gradient mbl_view_btn hidden"
                      : "button-gradient mbl_view_btn"
                  }
                  onMouseEnter={() => cursorChangeHandler("hovered2")}
                  onMouseLeave={() => cursorChangeHandler("")}
                  onClick={load_cont}
                >
                  Read more about my qualifications
                </a>
                <div
                  className={`mbl_text ${ContLoad ? "mbl_hidden active" : "mbl_hidden "}`}
                >
                  <h4>
                    Designer at heart, but understanding who to create for
                    requires broader know-how
                  </h4>
                  <ul className="listed-qualifications">
                    <li>Animation and Interactive Design (IxD)</li>
                    <li>Art and Creative Direction </li>
                    <li>Brand/Digital/Visual Identity</li>
                    <li>Branding and Campaigns</li>
                    <li>Concept Development</li>
                    <li>Creation and Ideation</li>
                    <li>Customer Experience Design (CX)</li>
                    <li>Digital Brand Transformation</li>
                    <li>Design Systems</li>
                    <li>Graphic Design</li>
                    <li>Responsive Design </li>
                    <li>User Interface Design (UI)</li>
                    <li>User Experience Design (UX)</li>
                    <li>Visual Content</li>
                    <li>
                      <a
                        href={PDF}
                        target="_blank"
                        className="button-gradient"
                        onMouseEnter={() => cursorChangeHandler("hovered2")}
                        onMouseLeave={() => cursorChangeHandler("")}
                      >
                        View my resume
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="rotate_gallary"
          data-scroll-container
          >
          <section
            className="featured-projects"
            id="feat_prod"
            data-scroll-section
            data-scroll
            
          >
            <div id="textscroll">
              <div className="feature_back_text" id="feature-text" >
                <h1 className="feature_heading">Selected projects</h1>
              </div>
            </div>
            <div  id="scrollLTR">
            <div className="gallery">
              <figure
                className="gallery__item"
                data-scroll
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                    data-scroll
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link" data-scroll>View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              <figure
                className="gallery__item"
                style={{
                  backgroundImage: "url(assets/images/Imagecomponent.png)",
                }}
              >
                <figcaption className="gallery__item-caption">
                  <h2
                    className="gallery__item-title"
                  >
                    Point-voucher
                  </h2>
                  <a className="gallery__item-link">View project</a>
                </figcaption>
              </figure>
              </div>
              </div>
          </section>
          </div>

          <section className="insights" data-scroll-section data-scroll>
            <div className="container">
              <h2 className="mollie line_animation2">
                <span className="text-animation-1">
                  Every experience have strengthened my view on life and who I
                  am today
                </span>
              </h2>
            </div>
            <div className="line_animation2">
              <nav className="toggle-navigation text-animation-4">
                <div className="container">
                  <div id="myDIV">
                  <div className="toggle-div">
                      <a
                        ref={recref}
                        name="recognition"
                        className={`toggle_btns toggle_active`}
                        onClick={ToggleHandler}
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                      >
                        Recognition
                      </a>
                      <a
                        name="experience"
                        className={`toggle_btns `}
                        data-toggle="modal"
                        onClick={ToggleHandler}
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                      >
                        Experience
                      </a>
                      <a
                        name="recommendations"
                        className={`toggle_btns `}
                        data-toggle="modal"
                        data-target="#recommend"
                        onClick={ToggleHandler}
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                      >
                        Recommendations
                      </a>
                      <span style={line} class="navigation-underline"></span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="toggle-content">
              {<Recoginition display={recogDisplay} />}
              <Experience display={expDisplay} />
              <Recommendation display={recoDisplay} />
            </div>
          </section>
          <section className="featured-quote" data-scroll-section data-scroll>
            <div className="container">
              <div className="line_animation2">
                <h3 className="hahmlet text-animation-2">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.”
                </h3>
              </div>
              <div className="line_animation2">
                <h4 className="text-animation-4">
                  Thomas Bærnholdt, CEO at bærnholdt
                </h4>
              </div>
            </div>
          </section>
          <section
            className="sticky-section with-images"
            data-scroll-section
            data-scroll
          >
            <div id="about-sticky-gallery" className="container">
              <div className="sticky-content content-gallery content-gallery-left">
                <img
                  src={
                    require("../assets/images/other/mschristensen-about-sticky-gallery-01.webp")
                      .default
                  }
                  alt=""
                  data-scroll
                  data-scroll-sticky
                  data-scroll-target="#about-sticky-gallery"
                  data-scroll-delay="0.5"
                />
              </div>
              <div className="normal-content content-gallery content-gallery-right">
                <img
                  src={
                    require("../assets/images/projects/pointvoucher-studios/mschristensen-pointvoucher-studio-big-parallax.webp")
                      .default
                  }
                  alt=""
                />
                <img
                  src={
                    require("../assets/images/other/mschristensen-about-sticky-gallery-02.webp")
                      .default
                  }
                  alt=""
                />
                <img
                  src={
                    require("../assets/images/other/mschristensen-about-sticky-gallery-03.webp")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <img
              className="image-after-content-gallery"
              src={
                require("../assets/images/other/mschristensen-about-sticky-gallery-04.webp")
                  .default
              }
              alt=""
            />
          </section>
          <section className="sticky-section " data-scroll-section data-scroll>
            <div id="japan" className="container">
              <div
                className="sticky-content "
                data-scroll
                data-scroll-sticky
                data-scroll-target="#japan"
                data-scroll-delay="0.5"
              >
                <div className="japan-animation">
                  <h4 className="text-animation-4">Why Japan?</h4>
                  <h2 className="mollie text-animation-3">
                    Working abroad has always been a dream of mine
                  </h2>
                  <h3 className="text-animation-2">
                    Denmark and Scandinavian design will always be at the core
                    of my heart, but I have an explorer within eager to
                    experience more of our beautiful world
                  </h3>
              </div>
              </div>
              <div className="normal-content" data-scroll>
                <p>
                  I am looking to join a team located in Osaka or Tokyo to share
                  my ambition and passion for digital solutions. As a
                  Japan-lover for its culture, food, and kindness of the people,
                  I feel right at home when in Japan. The adventure of working
                  in Japan is all I ever dreamed about, and I will stay for
                  quite a while once I get there.
                  </p>
                  <a
                  className={
                    ContLoad2
                      ? "button-gradient mbl_view_btn hidden"
                      : "button-gradient mbl_view_btn"
                  }
                  onMouseEnter={() => cursorChangeHandler("hovered2")}
                  onMouseLeave={() => cursorChangeHandler("")}
                  onClick={load_cont2}
                >
                  Read more about why
                </a>
                <div
                  className={`mbl_text ${ContLoad2 ? "mbl_hidden active" : "mbl_hidden "}`}
                >
                  <br />
                  <p>
                  Although I see many similarities between Denmark and Japan, I
                  believe I can bring a fresh wave to the digital world. I want
                  our combined strengths to reach high and venture even further
                  to create unique user-centric experiences that both clients
                  and consumers will enjoy. Having experienced working in
                  multinational companies, I find it exciting and rewarding to
                  work with people of different backgrounds and cultures. I am
                  multilingual myself in Danish, English and currently studying
                  Japanese.
                  <br />
                  <br />I hope to share new perspectives, structures, and ways
                  of thinking digitally; and the Danish “hygge” for those lovely
                  moments.
                </p>
                </div>
              </div>
            </div>
          </section>
          <section
            id="sticky-on-image"
            className="sticky-parallax "
            data-scroll-section
            data-scroll
          >
            <div className="container line_animation2">
              <h2
                className="mollie large-text text-animation-1"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#sticky-on-image"
                data-scroll-offset="-5%, 5%"
                data-scroll-delay="0.5"
              >
                Together we create the experiences that matter and make sense
              </h2>
            </div>
            <div
              className="parallax-image"
              data-scroll
              data-scroll-offset="25%"
            >
              <div
                className="footer-image"
                data-scroll
                data-scroll-speed="-2"
              ></div>
            </div>
          </section>
          {/* <div className="loading-container">
						<div className="loading-screen">
							<div className="animating-div"></div>
						</div>
					</div> */}
        </div>
        <Footer cookie_btn={props.menu_click} />
      </main>
    </>
  );
}

export default About;
