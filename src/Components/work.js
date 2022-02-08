import React, { useEffect, useState } from "react";
import img1 from "../assets/images/work/mschristensen-august-krogh-hero.webp";
import img2 from "../assets/images/work/mschristensen-baernholdt-hero.webp";
import img3 from "../assets/images/work/mschristensen-bibelselskabet-hero.webp";
import img4 from "../assets/images/work/mschristensen-bioinnovation-institute-hero.webp";
import img5 from "../assets/images/work/mschristensen-dansk-markedsfoering-hero.webp";
import img6 from "../assets/images/work/mschristensen-esmiley-hero.webp";
import img7 from "../assets/images/work/mschristensen-firstborn-capital-hero.webp";
import img8 from "../assets/images/work/mschristensen-fonda-hero.webp";
import img9 from "../assets/images/work/mschristensen-foodwaste-hero.webp";
import img10 from "../assets/images/work/mschristensen-haveselskabet-hero.webp";
import img11 from "../assets/images/work/mschristensen-levendestreg-hero.webp";
import img12 from "../assets/images/work/mschristensen-linkfactory-hero.webp";
import img13 from "../assets/images/work/mschristensen-molio-hero.webp";
import img14 from "../assets/images/work/mschristensen-novo-nordisk-foundation-hero.webp";
import img15 from "../assets/images/work/mschristensen-pengi-hero.webp";
import img16 from "../assets/images/work/mschristensen-pointvoucher-hero.webp";
import img17 from "../assets/images/work/mschristensen-pointvoucher-studios-hero.webp";
import img18 from "../assets/images/work/mschristensen-pointvoucher-studios-hero.webp";
import img19 from "../assets/images/work/mschristensen-spotthespy-hero.webp";
import img20 from "../assets/images/work/mschristensen-superbrugsen-hero.webp";
import img21 from "../assets/images/work/mschristensen-westend-hero.webp";

function Work(props) {
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

  const [imageState, setImageState] = useState(img1);

  function MouseOver(event, data) {
    event.target.parentNode.parentNode.style.boxShadow =
      "inset 10000px -5000px 1000px 0px #000000";
    event.target.parentNode.parentNode.style.boxShadow = "none";
    event.target.parentNode.parentNode.style.transition =
      "all 300ms ease-in-out";
    setImageState(data);
  }

  // function MouseOut(event) {
  //   event.target.style.color = "#999999";
  // }
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
          el.style.color = "red";
          setImageState(el.getAttribute("data-info"));
          // console.log(el.getAttribute("data-info"));
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
      <section
        className="work-page"
        style={{
          backgroundImage: imageState && `url(${imageState})`,
        }}
      >
        <nav onScroll={(e) => handleScroll(e)} id="element" className="scroll">
          {data &&
            data.map((el, i) => (
              <div
                className="this-item doesSelected"
                key={i}
                data-info={el.imgId}
                onMouseMove={(event) => MouseOver(event, el.imgId)}
                // onMouseOut={(e) => MouseOut(e, el.imgId)}
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
