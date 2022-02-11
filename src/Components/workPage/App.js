import React from "react";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import Slideshow from "./component";
import "./styles.css";

export default function App() {
  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });

  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}
