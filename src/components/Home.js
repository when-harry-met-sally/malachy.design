import React, { useState } from "react";
import Slider from "./Slider";
import everso from "../assets/everso.png";

const Home = () => {
  return (
    <div>
      <div className="background-image-one">
        <div className="background-image-one-content">
         <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Home;
