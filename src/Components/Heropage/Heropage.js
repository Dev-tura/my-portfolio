import React from "react";
import cr from "../images/cartoon-b.png";
import "../Heropage/Heopage.css";
import Headerr from "../Headerr/Headerr";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";

const Heropage = () => {
  return (
    <div className="main-hero">
      <div className="sub-hero">
        <div className="side0">
          <TiSocialFacebook />
          <TiSocialTwitter />
          <a href="https://www.linkedin.com/in/mistura-adelaja-2b7243199">
            <TiSocialLinkedin />
          </a>
          <FaInstagramSquare />
        </div>
        <div className="side1">
          <div className="hh">Hello I'm</div>
          <div className="size">Mistura Adelaja</div>
          <p className="thick">Professional Web Developer</p>
          <p>
            Front-end Developer who writes<br></br> clean, elegant and efficient codes.<br></br> I
            like to craft solid and<br></br> scalable products with great user experiences.
          </p>
          <a href="mailto:adelajatura@gmail.com">
            <button>Hire Me</button>
          </a>
        </div>
        <div className="side2">
          <img src={cr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
