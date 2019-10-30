import React, { useState, useEffect } from "react";

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
        {/* <div className="row false-nav-one valign-wrapper">
      <div className="col s6 false-logo-one">Visit Mexico</div>
      <div className="col s2"></div>
      <div className="col s4 right-align">
        <i class="fab fa-facebook-square fa-lg"></i>
        <i class="false-icon-one fab fa-lg fa-instagram"></i>
        <i class="false-icon-one fab fa-lg fa-twitter"></i>
      </div>
    </div>
    <div className="false-content-one">
    <div className="false-header-one">
        <div className="false-header-one-content">
            The trip of <br/>a lifetime.
        </div>
    </div>
      <div className="false-button-one"><div className='vh-center false-button-one-content'>BOOK A TRIP</div></div>
    </div> */}
      </div>
    </div>
  );
};

export default SlideOne;
