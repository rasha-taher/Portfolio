import React from "react";
import intuitive from "../Svgs/intuitive.svg";
import responsive from "../Svgs/responsive.svg";
import Dynamic from "../Svgs/dynamic.svg";
import Fast from "../Svgs/clock.svg";

const Header = () => {
  return (
    <div className="container" id="home">
      <div className="PenBackround">
        <ul className="header-menu">
          <li> <a href="#home"> Home</a></li>
          <li> <a href="#about">About </a></li>
          <li> <a href="#skill">Skills </a></li>
          <li> <a href="#project">Project </a></li>
          <li> <a href="#contact">Contact </a> </li>
        </ul>

        <div className="TitleP">
          <p className="name-title">
            I am Shant Kel-Khacherian <br></br>
          </p>
          <p className="work-title">Web developer</p>
        </div>
      </div>

    <div className="under">
      <section className="big-blue-div">
        <div className="bule-div">

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
        </div>
      
        <div className="bule-div">
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
        </div>
      </section>
      </div>
    </div>

  );
};
export default Header;
