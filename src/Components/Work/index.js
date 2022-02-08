import React from "react";
import {Curtains} from "react-curtains";
import Work from "./work";
import "./index.css";

export default function WorkApp() {

    return (
        <Curtains
            pixelRatio={Math.min(1.5, window.devicePixelRatio)}
         >
            <Work/>
        </Curtains>
    );
}
