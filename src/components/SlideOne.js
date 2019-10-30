import React, { useState, useEffect } from "react";
import SlideOneContent from "./SlideOneContent";

const SlideOne = () => {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  useEffect(() => {
    const resizeBackground = () => {
      const innerFrame = document.querySelector(".inner-frame");
      setLeft(innerFrame.getBoundingClientRect().left * -1);
      setTop(innerFrame.getBoundingClientRect().top * -1);
    };
    window.addEventListener("resize", () => {
      resizeBackground();
    });
    setTimeout(() => {
      resizeBackground();
    }, 50);
  }, []);
  return (
    <div className="slider-frame">
      <div className="inner-frame">
        <div
          className="frame-background"
          style={{
            left: left + "px",
            top: top + "px"
          }}
        >
        <SlideOneContent left={left} top={top}/>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
