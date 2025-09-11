import React from "react";
import "./Preloader.css";

const Preloader = () => (
  <div className="preloader">
    <div className="circle-preloader"></div>
    <p className="preloader__text">Searching for news...</p>
  </div>
);

export default Preloader;
