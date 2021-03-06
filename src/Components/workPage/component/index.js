import React, { useRef, useState, useEffect } from "react";
import { Plane, useCurtains } from "react-curtains";
import gsap from "gsap";
import { vertexShader, fragmentShader } from "../shaders/shaders";
import "./index.css";
import "../../../sass/components/_work-page.scss";
// import LocomotiveScroll from "locomotive-scroll";
import img1 from "../../../assets/images/work/mschristensen-august-krogh-hero.webp";
import img2 from "../../../assets/images/work/mschristensen-baernholdt-hero.webp";
import img3 from "../../../assets/images/work/mschristensen-bibelselskabet-hero.webp";
import img4 from "../../../assets/images/work/mschristensen-bioinnovation-institute-hero.webp";
import img5 from "../../../assets/images/work/mschristensen-dansk-markedsfoering-hero.webp";
import img6 from "../../../assets/images/work/mschristensen-esmiley-hero.webp";
import img7 from "../../../assets/images/work/mschristensen-firstborn-capital-hero.webp";
import img8 from "../../../assets/images/work/mschristensen-fonda-hero.webp";
import img9 from "../../../assets/images/work/mschristensen-foodwaste-hero.webp";
import img10 from "../../../assets/images/work/mschristensen-haveselskabet-hero.webp";
import img11 from "../../../assets/images/work/mschristensen-levendestreg-hero.webp";
import img12 from "../../../assets/images/work/mschristensen-linkfactory-hero.webp";
import img13 from "../../../assets/images/work/mschristensen-molio-hero.webp";
import img14 from "../../../assets/images/work/mschristensen-novo-nordisk-foundation-hero.webp";
import img15 from "../../../assets/images/work/mschristensen-pengi-hero.webp";
import img16 from "../../../assets/images/work/mschristensen-pointvoucher-hero.webp";
import img17 from "../../../assets/images/work/mschristensen-pointvoucher-studios-hero.webp";
import img18 from "../../../assets/images/work/mschristensen-sciencenews-hero.webp";
import img19 from "../../../assets/images/work/mschristensen-spotthespy-hero.webp";
import img20 from "../../../assets/images/work/mschristensen-superbrugsen-hero.webp";
import img21 from "../../../assets/images/work/mschristensen-westend-hero.webp";
import { useHistory } from "react-router-dom";

function Slideshow(props) {
  const [plane, setPlane] = useState(null);

  // slideshow states
  const [activeTexture, setActiveTexture] = useState(1);
  const [maxTextures, setMaxTextures] = useState(0);
  const [nextTextureIndex, setNextTextureIndex] = useState(2);

  const [data, setData] = useState([
    { name: "B??rnholdt", href: "#1", imgId: img2, id: 1 },
    { name: "BioInnovation Institute", href: "#2", imgId: img4, id: 2 },
    { name: "Levende Streg", href: "#3", imgId: img11, id: 3 },
    { name: "August Krogh", href: "#4", imgId: img1, id: 4 },
    { name: "ScienceNews", href: "#5", imgId: img18, id: 5 },
    { name: "Novo Nordisk Foundation", href: "#6", imgId: img14, id: 6 },
    { name: "Pointvouche", href: "#7", imgId: img16, id: 7 },
    { name: "Pointvoucher Studios", href: "#8", imgId: img17, id: 8 },
    { name: "FoodWaste", href: "#9", imgId: img9, id: 9 },
    { name: "eSmiley", href: "#10", imgId: img6, id: 10 },
    { name: "Spotthespy", href: "#11", imgId: img19, id: 11 },
    { name: "Fonda", href: "#12", imgId: img8, id: 12 },
    { name: "Bibelselskabet", href: "#13", imgId: img3, id: 13 },
    { name: "Molio", href: "#14", imgId: img13, id: 14 },
    { name: "Linkfactory", href: "#15", imgId: img12, id: 15 },
    { name: "Haveselskabet", href: "#16", imgId: img10, id: 16 },
    { name: "Firstborn Capital", href: "#17", imgId: img7, id: 17 },
    { name: "Pengi", href: "#18", imgId: img15, id: 18 },
    { name: "Dansk Markedsf??ring", href: "#19", imgId: img5, id: 19 },
    { name: "SuperBrugsen", href: "#20", imgId: img20, id: 20 },
    { name: "WestEnd London", href: "#21", imgId: img21, id: 21 },
  ]);

  const [imageState, setImageState] = useState(1);
  const [activeTextureIndex, setActiveTextureIndex] = useState(2);
  // console.log(
  //   imageState,
  //   "imageStateimageStateimageStateimageStateimageStateimageState"
  // );
  const isChanging = useRef(false);
  const tween = useRef(null);
  const activeTex = useRef(null);
  const nextTex = useRef(null);
  const slideshowInner = useRef(null);

  const thisRef = useRef(null);
  // const { cursorChangeHandler } = useContext(MouseContext);

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
      const arr = document.querySelectorAll(".doesSelected");
      arr.forEach((el) => {
        if (
          el.getBoundingClientRect().top < window.innerHeight / 2 + 50 &&
          el.getBoundingClientRect().top > window.innerHeight / 2 - 100
        ) {
          el.classList.add("isActiveP");
          // console.log(isChanging.current, "cccccccccccccccccccccccccccccccccc");
          // paymanica galis elementneri ush galn
          // !isChanging.current && plane
          if (plane && !isChanging.current) {
            isChanging.current = false;

            // console.log(maxTextures, "maxtext");
            // console.log(nextTextureIndex, plane.images, "both");
            // console.log(plane.images[nextTextureIndex], "imggggggg");

            setNextTextureIndex(el.getAttribute("data-number-needed"));

            nextTex.current.setSource(plane.images[nextTextureIndex]);

            tween.current = gsap.to(plane.uniforms.transitionTimer, {
              duration: 1.75,
              value: 90,
              ease: "power2.inOut",
              onComplete: () => {
                isChanging.current = false;

                plane.uniforms.transitionTimer.value = 0;
                // our next texture becomes our active texture
                activeTex.current.setSource(plane.images[activeTextureIndex]);
                setActiveTexture(activeTextureIndex);
              },
            });
          }
          // isChanging.current = false;
          setPlane(plane);
        } else {
          el.classList.remove("isActiveP");
        }
      });
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // useEffect(() => {
  //   let arr = document.querySelectorAll(".scroll");
  //   const scroll = new LocomotiveScroll({
  //     el: thisRef.current,
  //     smooth: true,
  //   });
  // });

  useEffect(() => {
    // console.log(slideshowInner.current.childElementCount);
    // if (slideshowInner.current) {
    // console.log(slideshowInner.current, "current");
    setMaxTextures(slideshowInner.current.childElementCount - 2);
    // }

    let currentTween = tween.current;
    return () => {
      if (currentTween) {
        currentTween.kill();
      }
    };
  }, []);
  useEffect(() => {
    setActiveTextureIndex(nextTextureIndex);
  });
  const uniforms = {
    transitionTimer: {
      name: "uTransitionTimer",
      type: "1f",
      value: 1,
    },
  };

  const onLoading = (plane, texture) => {
    // improve texture rendering on small screens with LINEAR_MIPMAP_NEAREST minFilter
    texture.setMinFilter(texture.gl.LINEAR_MIPMAP_NEAREST);
  };

  const onReady = (plane) => {
    setPlane(plane);
  };

  const onClick = () => {
    // if (plane && !isChanging.current) {
    //   isChanging.current = true;
    //   // check what will be next image
    //   let nextTextureIndex;
    //   // if (activeTexture < maxTextures) {
    //   //   nextTextureIndex = activeTexture + 1;
    //   // } else {
    //   nextTextureIndex = imageState;
    //   // apply it to our next texture
    //   nextTex.current.setSource(plane.images[nextTextureIndex]);
    //   tween.current = gsap.to(plane.uniforms.transitionTimer, {
    //     duration: 1.5,
    //     value: 90,
    //     ease: "power2.inOut",
    //     onComplete: () => {
    //       isChanging.current = false;
    //       tween.current = null;
    //       plane.uniforms.transitionTimer.value = 0;
    //       const activeTextureIndex = nextTextureIndex;
    //       // our next texture becomes our active texture
    //       activeTex.current.setSource(plane.images[activeTextureIndex]);
    //       setActiveTexture(activeTextureIndex);
    //     },
    //   });
    // }
  };
  useCurtains(
    (curtains) => {
      if (plane) {
        // first we set our very first image as the active texture
        activeTex.current = plane.createTexture({
          sampler: "activeTex",
          fromTexture: plane.textures[activeTexture],
        });
        // next we set the second image as next texture but this is not mandatory
        // as we will reset the next texture on slide change
        nextTex.current = plane.createTexture({
          sampler: "nextTex",
          fromTexture: plane.textures[activeTexture + 1],
        });
      }
    },
    [plane]
  );

  return (
    <>
      <section className="hori_Scroll">
        <div id="scrollLTR"></div>
        <div id="textscroll"></div>
      </section>
      <Plane
        className="Slideshow"
        // plane init parameters
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        // plane events
        onLoading={onLoading}
        onReady={onReady}
        onMouseMove={onClick}
      >
        <div
          className="work-page"
          style={{
            backgroundImage: plane && `url(${plane})`,
          }}
          ref={slideshowInner}
        >
          <nav
            onScroll={(e) => handleScroll(e)}
            id="element"
            className="scroll"
            ref={thisRef}
          >
            {data &&
              data.map((el, i) => (
                <p
                  className="this-item doesSelected"
                  key={i}
                  data-info={el.imgId}
                  // data-scroll
                  // data-scroll-speed="1"
                  onMouseMove={() => setImageState(el.id)}
                  data-number-needed={el.id}
                >
                  {el.name}
                </p>
              ))}
          </nav>
        </div>
        <div ref={slideshowInner}>
          {/* <span>Click me !</span> */}
          <img
            src="https://www.curtainsjs.com/examples/medias/displacement.jpg"
            data-sampler="displacement"
            alt=""
          />
          {data &&
            data.map((el, i) => (
              <img key={i} src={el.imgId} alt="" data-item-index={el.id} />
            ))}
        </div>
      </Plane>
    </>
  );
}

export default Slideshow;
