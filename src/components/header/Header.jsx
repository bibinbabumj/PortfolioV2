import React from "react";
import "./header.css";
import CvTalk from "./CvTalk.jsx";
import ProIMG from "../../assets/pro-img.png";
import ScocialLinks from "./ScocialLinks.jsx";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
      <h5>Hello, it's me</h5>
      <h1>Bibin <span>Babu ....</span></h1>
      <h5>I'm a Passionate Full Stack Developer</h5>
      <CvTalk />
      <ScocialLinks/>
      <div className="my-pro-pic">
        <img src={ProIMG} alt="pro-img" />
      </div>
      <a href="#Contact" className="scroll-down">Scroll Down</a>
      </div>
      
  
    </header>
  );
};

export default Header;
