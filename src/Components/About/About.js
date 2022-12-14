import React from "react";
import image from "../images/image.jpg";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { GrMail } from "react-icons/gr";
import "./About.css";

const About = () => {
  return (
    <div className="all">
      <div className="about">
        <div className="about__career">
          <div className="about__career--content0">
            {/* <VscThreeBars /> */}
            <img src={image} alt="" />
            {/* <button>Click Me</button> */}
          </div>
          <p className="h2-stylee">Mistura Adelaja</p>
          <p className="about__interest--content1">Front-End Developer</p>
          <p className="about__interest--content2">
            Imaginative Programmer with experience in user interface design, and graphic design. I
            enjoy taking on new challenges and using my knowledge and skills, and great attention to
            detail to ensure that work is completed and completed in great quality.
          </p>
          <div className="about__interest">
            <p className="about__interest--content">
              Interests:Software Engeneering, Web Development, UI/UX Design, Graphic Design
            </p>
          </div>
          <div className="about__socials">
            <AiFillGithub className="about__socials--icon" />
            <TiSocialLinkedin className="about__socials--icon" />
            <GrMail className="about__socials--icon" />
          </div>
          <div className="tabs">
            <div className="tab">Project (4)</div>
            <div className="tab">Essays (2)</div>
            <div className="tab">Resume</div>
          </div>
          {/* BEM */}
          {/* <div className="projects">
          <div className="projects__unilag">
            <div className="projects__unilag--2020"></div>
            <div className="projects__unilag--2021"></div>
          </div>
          <div className="projects__lasu"></div>
          <div className="projects__ui"></div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
