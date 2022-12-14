import React from "react";
import fresh from "../images/freshworkslogo.svg";
import Calculator from "../images/calculator.jpg";
import easyapp from "../images/easyapp.jpg";
import todo from "../images/todo-app.png";
import { BsCalendarDate } from "react-icons/bs";
import { GiSecurityGate } from "react-icons/gi";
import { FcSearch } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="services__one">
        <h2>Specialities</h2>
        <ul>
          <li>
            Accessible websites that looks great<br></br>on any screen
          </li>
          <li>
            Sustainable prrojects that are well<br></br>documented and easy to maintain
          </li>
          <li>
            Well Supported CMSs and frameworrks<br></br>frrom custom theme and plug development
            <br></br>to, implementation and administration
          </li>
        </ul>
      </div>
      <div className="services__two">
        <h2 className="h2-style">Check out some of my projects</h2>
        <div className="services__two--projects">
          <div className="under-services__two--projects1">
            <div className="services__two--projects--1">
              <p className="project-paragraph">FreshWorksClone</p>
              <img src={fresh} alt="" />
              <button className="button-style">Follow Link</button>
            </div>
            <div className="services__two--projects--2">
              <p className="project-paragraph">Todoapp</p>
              <img className="image-1" src={Calculator} alt="" />
              <button className="button-style">Follow Link</button>
            </div>
          </div>
          <div className="under-services__two--projects2">
            <div className="services__two--projects--3">
              <p className="project-paragraph">Easyapp</p>
              <img className="image-2" src={easyapp} alt="" />
              <button className="button-style">Follow Link</button>
            </div>
            <div className="services__two--projects--4">
              <p className="project-paragraph">Calculator</p>
              <img className="image-3" src={todo} alt="" />
              <button className="button-style">Follow Link</button>
            </div>
          </div>
          <div className="services__two--footer">
            <div className="services__two--footer--line1">
              <BsCalendarDate />
              <p className="footer-text">March, 2022</p>
            </div>
            <div className="services__two--footer--line1">
              <GiSecurityGate />
              <p className="footer-text">Terms</p>
            </div>
            <div className="services__two--footer--line1">
              <FcSearch />
              <p className="footer-text">Reviews</p>
            </div>
            <div className="services__two--footer--line1">
              <FcAbout />
              <p className="footer-text">About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
