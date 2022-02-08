import React, { useRef, useEffect, useState } from "react";
import { Plane, useCurtains } from "react-curtains";
import gsap from "gsap";
import { vertexShader, fragmentShader } from "./shaders/shaders";

import img1 from "../../assets/videos/work/mschristensen-august-krogh-hero.mp4";
import img2 from "../../assets/videos/work/mschristensen-baernholdt-hero.mp4";
import img3 from "../../assets/videos/work/mschristensen-bibelselskabet-hero.mp4";
import img4 from "../../assets/videos/work/mschristensen-bioinnovation-institute-hero.mp4";
import img5 from "../../assets/videos/work/mschristensen-dansk-markedsfoering-hero.mp4";
import img6 from "../../assets/videos/work/mschristensen-esmiley-hero.mp4";
import img7 from "../../assets/videos/work/mschristensen-firstborn-capital-hero.mp4";
import img8 from "../../assets/videos/work/mschristensen-fonda-hero.mp4";
import img9 from "../../assets/videos/work/mschristensen-foodwaste-hero.mp4";
import img10 from "../../assets/videos/work/mschristensen-haveselskabet-hero.mp4";
import img11 from "../../assets/videos/work/mschristensen-levendestreg-hero.mp4";
import img12 from "../../assets/videos/work/mschristensen-linkfactory-hero.mp4";
import img13 from "../../assets/videos/work/mschristensen-molio-hero.mp4";
import img14 from "../../assets/videos/work/mschristensen-novo-nordisk-foundation-hero.mp4";
import img15 from "../../assets/videos/work/mschristensen-pengi-hero.mp4";
import img16 from "../../assets/videos/work/mschristensen-pointvoucher-hero.mp4";
import img17 from "../../assets/videos/work/mschristensen-pointvoucher-studios-hero.mp4";
import img18 from "../../assets/videos/work/mschristensen-pointvoucher-studios-hero.mp4";
import img19 from "../../assets/videos/work/mschristensen-spotthespy-hero.mp4";
import img20 from "../../assets/videos/work/mschristensen-superbrugsen-hero.mp4";
import img21 from "../../assets/videos/work/mschristensen-westend-hero.mp4";
console.log(vertexShader);

function Work(props) {
  useCurtains((curtains) => {
    console.log(curtains);
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });
  const [data, setData] = useState([
    { name: "Bærnholdt", href: "#1", imgId: img1 },
    { name: "BioInnovation Institute", href: "#2", imgId: img2 },
    { name: "Levende Streg", href: "#3", imgId: img3 },
    { name: "August Krogh", href: "#4", imgId: img4 },
    { name: "ScienceNews", href: "#5", imgId: img5 },
    { name: "Novo Nordisk Foundation", href: "#6", imgId: img6 },
    { name: "Pointvouche", href: "#7", imgId: img7 },
    { name: "Pointvoucher Studios", href: "#8", imgId: img8 },
    { name: "FoodWaste", href: "#9", imgId: img9 },
    { name: "eSmiley", href: "#10", imgId: img10 },
    { name: "Spotthespy", href: "#11", imgId: img11 },
    { name: "Fonda", href: "#12", imgId: img12 },
    { name: "Bibelselskabet", href: "#13", imgId: img13 },
    { name: "Molio", href: "#14", imgId: img14 },
    { name: "Linkfactory", href: "#15", imgId: img15 },
    { name: "Haveselskabet", href: "#16", imgId: img16 },
    { name: "Firstborn Capital", href: "#17", imgId: img17 },
    { name: "Pengi", href: "#18", imgId: img18 },
    { name: "Dansk Markedsføring", href: "#19", imgId: img19 },
    { name: "SuperBrugsen", href: "#20", imgId: img20 },
    { name: "WestEnd London", href: "#21", imgId: img21 },
  ]);

  // const [imageState, setImageState] = useState(img1);

  const [plane, setPlane] = useState(null);

  const slideshowInner = useRef(null);

  const myRef = useRef();

  // slideshow states
  const [activeTexture, setActiveTexture] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const dataSampler = ["firstTexture", "secondTexture", "thirdTexture"];
  const uniforms = {
    transitionTimer: {
      name: "uTransitionTimer",
      type: "1f",
      value: 0,
    },
    fadeIn: {
      name: "uFadeIn",
      type: "1f",
      value: 0,
    },
    timer: {
      name: "uTimer",
      type: "1f",
      value: 0,
    },
    to: {
      name: "uTo",
      type: "1f",
      value: 0,
    },
    from: {
      name: "uFrom",
      type: "1f",
      value: 0,
    },
  };

  const onReady = (plane) => {
    gsap.to(plane.uniforms.fadeIn, {
      duration: 0,
      value: 1,
    });
    setPlane(plane);
    plane.videos[0].play();
    setActiveTexture(0);
  };

  const onClick = (event, to) => {
    if (isRunning || to == activeTexture) return;

    setIsRunning(true);

    plane.uniforms.to.value = to;

    let fake = { progress: 0 };
    gsap.to(fake, {
      duration: 1.75,
      progress: 1,
      easing: "power2.in",
      onStart: () => {
        plane.videos[to].play();
        setActiveTexture(to);
      },
      onUpdate: () => {
        if (fake.progress === 1) {
          plane.uniforms.from.value = to;
        }
        plane.uniforms.transitionTimer.value = fake.progress;
      },
      onComplete: () => {
        plane.uniforms.from.value = to;
        setIsRunning(false);
      },
    });
  };

  function MouseOut(event) {
    event.target.style.color = "#999999";
  }
  const arr = document.querySelectorAll(".doesSelected");
  const handleScroll = (e) => {
    if (
      e &&
      e.target.scrollTop + e.target.offsetHeight + 1000 >=
        e.target.scrollHeight &&
      data.length <= 500
    ) {
      setData([...data, ...data]);
    }
    // window.innerHeight
    if (e) {
      arr.forEach((el) => {
        if (
          el.getBoundingClientRect().top < window.innerHeight / 2 + 50 &&
          el.getBoundingClientRect().top > window.innerHeight / 2 - 100
        ) {
          el.style.color = "red";
        } else {
          el.style.color = "#999999";
        }
      });
    }
  };
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      {/* Imp Files */}
      <section className="hori_Scroll">
        <div id="scrollLTR"></div>
        <div id="textscroll"></div>
      </section>
      {/* Imp Files */}

      {/* Start Work Page Code from here */}
      <section className="work-page">
        <Plane
          className="Slideshow"
          // plane init parameters
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          // plane events
          onReady={onReady}
        >
          <div ref={slideshowInner}>
            {data &&
              data.map((el, i) => (
                <video
                  key={i}
                  playsInline
                  muted
                  src={el.imgId}
                  data-sampler={i < 3 ? dataSampler[i] : "texture" + (i + 1)}
                />
              ))}
          </div>
        </Plane>
        <nav onScroll={(e) => handleScroll(e)} id="element" className="scroll">
          {data &&
            data.map((el, i) => (
              <div
                className="this-item doesSelected"
                key={i}
                data-index={i}
                onMouseMove={(event) => onClick(event, i)}
                onMouseOut={(e) => MouseOut(e)}
              >
                {el.name}
              </div>
            ))}
        </nav>
      </section>
      {/* End Work Page Code from here */}
    </>
  );
}
export default Work;
