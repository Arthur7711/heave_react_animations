// import "./App.scss";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Layout/header";
import Work from "./Components/work.js";
import About from "./Components/about";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Components/notFound";
import ProjectTemplate from "./Components/projectTemplate";
import locomotiveScroll from "locomotive-scroll/dist/locomotive-scroll";
import CookieBanner from "./Components/Modals/cookieBanner";
import MouseContextProvider from "./Components/custom cursor/mouse-context";
import { TweenMax, TimelineMax, Power1, Power2 } from "gsap";
import SlideinBlock from "./Components/Modals/slideinBlock";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import workNow from "./Components/workPage";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App(props) {
  const scrollRef = React.createRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      const scroll = new locomotiveScroll(
        {
          el: scrollRef.current,
          smooth: true,
        },
        200
      );

      const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
      const clamp = (num, min, max) =>
        num <= min ? min : num >= max ? max : num;
      let scroll2 = { cache: 0, current: 0 };
      const allImgs = [...document.querySelectorAll(".gallery__item")];
      scroll.on("scroll", (position) => {
        if (position.scroll.y > 11000) {
          document.querySelector("body").classList.add("scrolled");
        } else {
          document.querySelector("body").classList.remove("scrolled");
        }
        scroll2.current = position.scroll.y;
        const distance = scroll2.current - scroll2.cache;
        scroll2.cache = scroll2.current;
        const skewVal = map(distance, -50, 50, -15, 15);
        allImgs.forEach(
          (el) =>
            (el.style.transform = "skewX(" + clamp(skewVal, -15, 15) + "deg)")
        );
      });

      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(".scroll", {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // pinType: document.querySelector(".scroll").style.transform ? "transform" : "fixed"
      });
      scroll.update();
      //   animation 1
      gsap.utils.toArray(".line_animation2").forEach((sec, i) => {
        let animate_line1 = new SplitText(
          sec.querySelectorAll(".text-animation-1"),
          { type: "lines, words, chars" }
        );
        let animate_line_text1 = animate_line1.chars;
        gsap.set(sec.querySelectorAll(".text-animation-1"), {
          perspective: 800,
        });
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                tl.progress(1);
              }
            },
          },
          onComplete: () => {
            animate_line1.revert();
          },
        });
        tl.from(
          animate_line_text1,
          0.7,
          {
            duration: 3,
            opacity: 0,
            rotationX: 60,
            transformOrigin: "0 100% 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          0.25
        );

        // animation 2
        let animate_line2 = new SplitText(
          sec.querySelectorAll(".text-animation-2"),
          { type: "lines, words" }
        );
        let animate_line_text2 = animate_line2.words;
        let tc = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                tc.progress(1);
              }
            },
          },
          onComplete: () => {
            animate_line2.revert();
          },
        });
        tc.from(
          animate_line_text2,
          0.9,
          {
            duration: 2,
            opacity: 0,
            y: 80,
            rotationX: 0,
            transformOrigin: "0% 0 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          0.25
        );

        //  animation 3
        let childSplit = new SplitText(
          sec.querySelectorAll(".text-animation-3"),
          { type: "lines", linesClass: "split-child" }
        );
        let parentSplit = new SplitText(
          sec.querySelectorAll(".text-animation-3"),
          { type: "lines", linesClass: "split-parent" }
        );
        let animate_line_text3 = childSplit.lines;
        let tb = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                tb.progress(1);
              }
            },
          },
          onComplete: () => {
            parentSplit.revert();
            childSplit.revert();
          },
        });

        tb.staggerFrom(
          animate_line_text3,
          0.75,
          {
            y: "200%",
            ease: Power1.easeOut,
          },
          0.25
        );
        // animation 4
        let animate_line_text4 = sec.querySelectorAll(".text-animation-4");
        let td = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                tb.progress(1);
              }
            },
          },
        });
        td.from(
          animate_line_text4,
          0.75,
          {
            opacity: 0,
            duration: 5,
            ease: "power2.out",
            stagger: 0.2,
          },
          0.5
        );
        //   underline animation
        let animate_line_text5 = sec.querySelectorAll(".line");
        let tu = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                tu.progress(1);
              }
            },
          },
        });
        tu.fromTo(
          animate_line_text5,
          0.75,
          {
            width: "0",
            opacity: "0",
          },
          {
            width: "100%",
            opacity: "1",
            duration: 0,
            stagger: 0.5,
            immediateRender: false,
          },
          2
        );
      }, 3);

      // Intro animation
      gsap.utils.toArray(".introduction").forEach((introsec, i) => {
        // Intro animation heading 1
        let animate_line2 = new SplitText(
          introsec.querySelectorAll(".text-animation-2"),
          { type: "lines, words" }
        );
        let animate_line_text2 = animate_line2.words;
        gsap.set(introsec.querySelectorAll(".text-animation-2"), {
          opacity: 1,
        });
        let introAnime1 = gsap.timeline({
          scrollTrigger: {
            trigger: introsec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                introAnime1.progress(1);
              }
            },
          },
        });
        introAnime1.from(
          animate_line_text2,
          0.75,
          {
            duration: 2,
            opacity: 0,
            y: 80,
            rotationX: 0,
            transformOrigin: "0% 0 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          1
        );

        // Intro animation heading 1
        let animate_line1 = new SplitText(
          introsec.querySelectorAll(".text-animation-1"),
          { type: "lines, words, chars" }
        );
        let animate_line_text1 = animate_line1.chars;
        gsap.set(introsec.querySelectorAll(".text-animation-1"), {
          perspective: 800,
          opacity: 1,
        });
        let introAnime2 = gsap.timeline({
          scrollTrigger: {
            trigger: introsec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                introAnime2.progress(1);
              }
            },
          },
        });
        introAnime2.from(
          animate_line_text1,
          0.7,
          {
            duration: 3,
            opacity: 0,
            rotationX: 60,
            transformOrigin: "0 100% 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          2
        );

        // Intro animation heading 3
        let animate_line3 = new SplitText(
          introsec.querySelectorAll(".third_text.text-animation-2"),
          { type: "lines, words" }
        );
        let animate_line_text3 = animate_line3.words;
        gsap.set(introsec.querySelectorAll(".third_text.text-animation-2"), {
          opacity: 1,
        });
        let introAnime3 = gsap.timeline({
          scrollTrigger: {
            trigger: introsec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                introAnime3.progress(1);
              }
            },
          },
        });
        introAnime3.from(
          animate_line_text3,
          0.75,
          {
            duration: 2,
            opacity: 0,
            y: 80,
            rotationX: 0,
            transformOrigin: "0% 0 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          3.3
        );

        //   underline animation
        let animate_line_text5 = introsec.querySelectorAll(".line");
        let introAnime4 = gsap.timeline({
          scrollTrigger: {
            trigger: introsec,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                introAnime4.progress(1);
              }
            },
          },
        });
        introAnime4.fromTo(
          animate_line_text5,
          0.75,
          {
            width: "0",
            opacity: "0",
          },
          {
            width: "100%",
            opacity: "1",
            duration: 0,
            stagger: 0.8,
            immediateRender: false,
          },
          3.3
        );
      });

      // Why Japan animation
      gsap.utils.toArray(".japan-animation").forEach((sec2, i) => {
        // japan animation fadein
        let animate_line_text4 = sec2.querySelectorAll(".text-animation-4");
        let japanAnime4 = gsap.timeline({
          scrollTrigger: {
            trigger: sec2,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                japanAnime4.progress(1);
              }
            },
          },
        });
        japanAnime4.from(
          animate_line_text4,
          0.75,
          {
            opacity: 0,
            duration: 5,
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          1
        );

        // japan animation heading 1
        let childSplit = new SplitText(
          sec2.querySelectorAll(".text-animation-3"),
          { type: "lines", linesClass: "split-child" }
        );
        let parentSplit = new SplitText(
          sec2.querySelectorAll(".text-animation-3"),
          { type: "lines", linesClass: "split-parent" }
        );
        let animate_line_text3 = childSplit.lines;
        let japanheadingAnime3 = gsap.timeline({
          scrollTrigger: {
            trigger: sec2,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                japanheadingAnime3.progress(1);
              }
            },
          },
          onComplete: () => {
            parentSplit.revert();
            childSplit.revert();
          },
        });

        japanheadingAnime3.from(
          animate_line_text3,
          0.75,
          {
            y: "200%",
            ease: Power1.easeOut,
            stagger: 0.25,
          },
          2
        );

        // japan animation text 3
        let animate_line2 = new SplitText(
          sec2.querySelectorAll(".text-animation-2"),
          { type: "lines, words" }
        );
        let animate_line_text2 = animate_line2.words;
        let japanheadingAnime2 = gsap.timeline({
          scrollTrigger: {
            trigger: sec2,
            scroller: ".scroll",
            start: "top center",
            end: "bottom center",
            scrub: false,
            onScrubComplete: (self) => {
              if (self.progress === 1) {
                self.kill();
                japanheadingAnime2.progress(1);
              }
            },
          },
          onComplete: () => {
            animate_line2.revert();
          },
        });
        japanheadingAnime2.from(
          animate_line_text2,
          0.75,
          {
            duration: 2,
            opacity: 0,
            y: 80,
            rotationX: 0,
            transformOrigin: "0% 0 0",
            ease: Power1.easeOut,
            stagger: 0.02,
          },
          3
        );
      });

      // progress bar animation
      const timelineBar = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          scroller: ".scroll",
          scrub: true,
          start: "top top",
          end: "bottom+=80%",
        },
      });
      timelineBar
        .to(".progress span", { height: "100%", ease: "none" }, 0)
        .to("progress", { duration: 0.001, opacity: 0, ease: "none" }, 0.95);

      // horizontal scroll
      // sCROLL LEFT TO RIGHT
      let container = document.getElementById("scrollLTR");
      gsap.set(container, {
        x: () => -(container.scrollWidth - window.innerWidth) + "px",
      });
      gsap.to(container, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          scroller: ".scroll",
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" - (container.scrollWidth - window.innerWidth),
        },
      });

      let container2 = document.querySelector("#textscroll");
      gsap.set(container2, { x: 3000, y: 400 });
      gsap.to(container2, {
        x: () => -(container2.scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
          scroller: ".scroll",
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" - (container2.scrollWidth - window.innerWidth),
        },
      });

      // video zoom in effect
      let mediaZoomIn = document.querySelectorAll(".videop-popup iframe");
      let tZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: ".media",
          scroller: ".scroll",
          start: "top center",
          end: "bottom center",
          scrub: false,
          onScrubComplete: (self) => {
            if (self.progress === 1) {
              self.kill();
              tZoomIn.progress(1);
            }
          },
        },
      });
      tZoomIn.from(
        mediaZoomIn,
        0.75,
        {
          opacity: 0,
          scale: 0,
          duration: 10,
          ease: "power2.out",
          stagger: 0.2,
          css: { borderRadius: "50%", opacity: "0", transform: "scale(0)" },
        },
        0.25
      );

      ScrollTrigger.addEventListener("refresh", () => scroll.update());
      ScrollTrigger.refresh();
    }, 1000);
  }, []);

  // Toggle contact details
  const [menuActive, setmneuActive] = useState(false);
  const menu_act = (e) => {
    const menu_act1 = document.getElementById("slide_box");
    if (menu_act1 !== null) {
      menu_act1.classList.add("slide_block_active");
      e.preventDefault();
      // setmneuActive(!menuActive);
      let slidebox_animate = new SplitText(
        document.querySelectorAll(".animay"),
        { type: "lines, words, chars" }
      );
      const textanimate = slidebox_animate.words;
      // the function uses gsap tweens
      // for the animation and refs to select     // the DOM node to animate
      let tf = gsap.timeline();
      tf.from(
        textanimate,
        0.5,
        {
          duration: 2,
          opacity: 0,
          y: "50px",
          rotationX: 0,
          transformOrigin: "bottom",
          ease: Power1.easeOut,
          stagger: 0.01,
        },
        1
      );

      // animation 4
      let slidebox_fade = document.querySelectorAll(".slide_fadein");
      let tg = gsap.timeline({});
      tg.from(
        slidebox_fade,
        0.75,
        {
          opacity: 0,
          duration: 10,
          ease: Power2.out,
          stagger: 0.25,
        },
        2
      );
    }
  };

  // toggle cookie policy
  const [cookieMenu, setCookieMenu] = useState(false);
  const cookMenu = () => {
    const menu_act1 = document.getElementById("slide_box");
    if (menu_act1 !== null) {
      menu_act1.classList.add("cookie_block_active");
      let tf = gsap.timeline();
      tf.from(
        ".cookie-text-animation-3",
        0.5,
        {
          duration: 2,
          opacity: 0,
          y: "50px",
          rotationX: 0,
          transformOrigin: "bottom",
          ease: Power1.easeOut,
          stagger: 0.01,
        },
        1
      );
      // animation 4
      let slideboxFade = document.querySelectorAll(".cookie_fadein");
      let tg = gsap.timeline({});
      tg.from(
        slideboxFade,
        0.75,
        {
          opacity: 0,
          duration: 5,
          ease: Power2.out,
          stagger: 0.2,
        },
        2
      );
    }
  };
  const loader = document.querySelector(".loader-container");
  const showLoader = () => {
    const timer = setTimeout(() => {
      loader.classList.add("loader-hide");
    }, 400);
  };
  const hideLoader = () => {
    const timer = setTimeout(() => {
      loader.classList.remove("loader--hide");
    }, 5000);
    const ld_gray = gsap.timeline({});
    const loaderLayer = document.querySelector(".loader-container");
    ld_gray.fromTo(
      loaderLayer,
      {
        duration: 2.5,
        top: "100%",
        ease: "power1.out",
      },
      {
        duration: 2.5,
        delay: 0.5,
        top: "-150%",
        ease: "power1.out",
      }
    );
  };
  // black element
  useEffect(() => {
    hideLoader();
  });

  return (
    <>
      <div className="App" hideLoader={hideLoader} showLoader={showLoader}>
        <MouseContextProvider>
          <Router>
            <Header
              menu_click={menu_act}
              header_active={`${menuActive ? "active" : ""}`}
            />
            <div ref={scrollRef} className="scroll">
              <div>
                <Switch>
                  <Route exact path="/" component={About}>
                    <About menu_click={cookMenu} />
                  </Route>
                  {/* <Route exact path="/work" component={Work} /> */}
                  <Route exact path="/work" component={workNow} />
                  <Route
                    exact
                    path="/project-template"
                    component={ProjectTemplate}
                  />
                  <Route exact component={NotFound} />
                </Switch>
              </div>
              <div className="scroll-up">
                <a
                  className="back-to-top"
                  href="#start"
                  role="button"
                  aria-label="Back to top"
                  data-scroll-to
                ></a>
              </div>
            </div>
          </Router>
          <CookieBanner />
        </MouseContextProvider>
        <SlideinBlock />
      </div>
    </>
  );
}

export default App;
