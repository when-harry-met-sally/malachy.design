import React, { useState } from "react";

const SlideOne = () => {
  return (
    <div className="slider-frame">
    <div className="row false-nav-one valign-wrapper">
      <div className="col s6 false-logo-one">Visit Mexico</div>
      <div className="col s2"></div>
      <div className="col s4 right-align">
        <i class="fab fa-facebook-square fa-lg"></i>
        <i class="false-icon-one fab fa-lg fa-instagram"></i>
        <i class="false-icon-one fab fa-lg fa-twitter"></i>
      </div>
    </div>
    <div className="false-content-one">
      {/* <div class="false-button-one">Book Now!</div> */}
    </div>
  </div>
  );
};

export default SlideOne;
