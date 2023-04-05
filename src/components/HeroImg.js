import "./HeroImgStyle.css";
import React from 'react'
import { Link } from "react-router-dom";

import img1 from "../assets/img1.jpg";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="intro-img" src={img1} alt="image"/>

    </div>
    <div className="content">
        <h1>HI, I AM AARTI DEVKAR.</h1>
        <p> A Computer Science student, passionate about programming and designing.</p><br></br>
      
    <div className="btn">
    
        <Link to="/project" className="btn1"> projects</Link>
        <Link to="/contact" className="btn2"> CONTACT</Link>

    </div>
    </div>
  </div>);
  
}

export default HeroImg