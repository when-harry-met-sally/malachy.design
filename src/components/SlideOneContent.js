import React, { useState, useEffect } from "react";

const SlideOneContent = ({ left, top, width, height, contentStyling, slideOneStyling}) => {
    console.log(slideOneStyling)
  return (
    <div
      className={"false-slide-one"}
      style={{
        left: left * -1 + "px",
        top: top * -1 + "px",
        // width: width + "px",
        // height: height + "px"
      }}
    >
        <div className={contentStyling}>
      <div className="slide-one-false-nav">
        <span className="false-logo-one">Visit Mexico</span>
        <span className="false-icons-one">
          <i className="fab fa-facebook-square fa-lg"></i>
          <i className="false-icon-one fab fa-lg fa-instagram"></i>
          <i className="false-icon-one fab fa-lg fa-twitter"></i>
        </span>
      </div>
      <div className="false-header-one">
        The trip of <br />a lifetime.
      </div>
      <div className="false-button-one valign-wrapper">
        <div className="false-button-one-content">BOOK A TRIP</div>
      </div>
      <div className='slide-one-part-two' style={{
          height: '40em'
      }}>
          <div className='slide-two-content'>
          <div className='slide-one-part-two-img'></div>
          <div className='slide-two-header'>You've <span className='underlined'>never</span> had <br/> tacos <br/>like these.</div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default SlideOneContent;

{
  /* <div className="row false-nav-one valign-wrapper">
        <div className="col s6 false-logo-one">Visit Mexico</div>
        <div className="col s2"></div>
        <div className="col s4">
          <i class="fab fa-facebook-square fa-lg"></i>
          <i class="false-icon-one fab fa-lg fa-instagram"></i>
          <i class="false-icon-one fab fa-lg fa-twitter"></i>
        </div>
      </div>
      <div className="false-content-one">
        <div className="false-header-one">
          <div className="false-header-one-content">
            The trip of <br />a lifetime.
          </div>
        </div>
        <div className="false-button-one">
          <div className="vh-center false-button-one-content">BOOK A TRIP</div>
        </div>
      </div> */
}
