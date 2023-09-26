import React from "react";
import intuitive from "../Svgs/intuitive.svg";
import responsive from "../Svgs/responsive.svg";
import Dynamic from "../Svgs/dynamic.svg";
import Fast from "../Svgs/clock.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="PenBackround">
        <ul className="header-menu">
          <li> <a href="#"> Home</a></li>
          <li> <a href="#">About </a></li>
          <li> <a href="#">Skills </a></li>
          <li> <a href="#">Project </a></li>
          <li> <a href="#">Contact </a> </li>
        </ul>

        <div className="TitleP">
          <p className="name-title">
            I am Shant Kel-Khacherian <br></br>
          </p>
          <p className="work-title">Web developer</p>
        </div>
      </div>
      <section>
        <div className="bule-continer">
          <div className="Bluediv">
            <img src={Fast} className="blue-image"></img>
          </div>
          <p className="sub-titles">Fast</p>
          <p>
            Fast load times and lag<br></br>
            free interaction my <br></br>
            highes priority
          </p>
        </div>
        <div className="bule-continer">
          <div className="Bluediv">
            <img src={responsive} className="blue-image"></img>
          </div>
          <p className="sub-titles">Responsive</p>
          <p>
            My layouts will work<br></br>
            on any device big or<br></br> small
          </p>
        </div>
        <div className="bule-continer">
          <div className="Bluediv">
            <img src={intuitive} className="blue-image"></img>
          </div>
          <p className="sub-titles">Itituative</p>
          <p>
            My layouts will work<br></br>
            on any device big or <br></br>small
          </p>
        </div>
        <div className="bule-continer">
          <div className="Bluediv">
            <img src={Dynamic} className="blue-image"></img>
          </div>
          <p className="sub-titles">Dynamic</p>
          <p>
            Website don’thave to be specific.<br></br>I love making pages
            <br></br> come to life
          </p>
        </div>
      </section>
    </div>
  );
};
export default Header;
