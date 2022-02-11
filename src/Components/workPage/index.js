import React from "react";
import { Curtains } from "react-curtains";
import App from "./App";

const Index = () => {
  return (
    <Curtains
      pixelRatio={Math.min(1.5, window.devicePixelRatio)}
      autoRender={false} // we'll use gsap ticker in App.js instead
    >
      <App />
    </Curtains>
  );
};

export default Index;
