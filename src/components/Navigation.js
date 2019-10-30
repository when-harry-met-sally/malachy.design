import React, { useState } from "react";
import everso from "../assets/everso.png";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="row valign-wrapper navbar">
        <div className="col s6">
          <div className="malachy-logo">malachy.design</div>
        </div>
        <div className="col s6 right-align">
          <div className='nav-links hide-on-small-only'>
          <a className="nav-link" href={''}>Portfolio</a>
          <a className="nav-link" href={''}>Resume</a>
          <a className="nav-link contact-link" href={''}>Contact</a>
          </div>
          <div className='hide-on-med-and-up'><i class="fas fa-bars fa-2x"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
