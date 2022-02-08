import React, { useContext } from "react";
import "./cursor.scss";
import useMousePosition from "./useMousePosition";
import { MouseContext } from "./mouse-context";

const Cursor = () => {
  // 1.
const { cursorType, cursorChangeHandler } = useContext(MouseContext);

const { x, y } = useMousePosition();
return (
  <>
          {/* 2. */}
    <div
      style={{ left: `${x}px`, top: `${y}px` }}
      className={"ring " + cursorType}
    ></div>
  </>
);
};

export default Cursor;