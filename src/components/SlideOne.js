import React, { useState, useEffect } from "react";
import SlideOneContent from "./SlideOneContent";

const SlideOne = () => {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [frameStyling, setFrameStyling] = useState("invisible");
  const [contentStyling, setContentStyling] = useState("invisible");
  const [slideOneStyling, setSlideOneStyling] = useState(null);

  useEffect(() => {
    const resizeBackground = () => {
      const innerFrame = document.querySelector(".inner-frame");
      setLeft(innerFrame.getBoundingClientRect().left * -1);
      setTop(innerFrame.getBoundingClientRect().top * -1);
      setWidth(innerFrame.clientWidth);
      setHeight(innerFrame.clientHeight);
    };
    window.addEventListener("resize", () => {
      resizeBackground();
    });
    setTimeout(() => {
      resizeBackground();
    }, 50);
    setTimeout(() => setFrameStyling("fade-in"), 1000);
    setTimeout(() => setContentStyling("fade-in"), 2500);
    setTimeout(() => setSlideOneStyling("slide-move-down"), 4000);
    setTimeout(() => setSlideOneStyling("slide-move-up"), 7000);
  }, []);
  return (
    <div className={"slider-frame " + frameStyling}>
      <div className="inner-frame">
        <div
          style={{
            left: left + "px",
            top: top + "px"
          }}
          className={"frame-background " + slideOneStyling}
        >
          <SlideOneContent
            left={left}
            top={top}
            width={width}
            height={height}
            contentStyling={contentStyling}
            slideOneStyling={slideOneStyling}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
