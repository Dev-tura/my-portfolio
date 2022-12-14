import React from "react";
import "../Headerr/Headerr.css";
import { Link } from "react-router-dom";

const Headerr = () => {
  return (
    <div className="headerr-main">
      <div className="sub-mainn">
        <div className="part1">
          <h2>
            <side className="hhh">Front-end</side> Developer
          </h2>
        </div>
        <div className="part2">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="about">
            <h3>About</h3>
          </Link>
          <Link to="services">
            <h3>Services</h3>
          </Link>
          <a href="mailto:adelajatura@gmail.com">
            <h3>Portfolio</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headerr;
