import React from "react";
import '../style/about.css'
import image from "../Svgs/image.jpg";

const About = () => {
  const downloadCV = async () => {
    try {
      const response = await fetch('http://localhost:5000/download/latest');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'shant_Kel-Khacherian_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div id="about">
      <p className="title">About Me</p>
      <div className="about">
        <div className="image">
          <img className="image1" src={image} alt="image1" />
        </div>
        <div className="content">
          <p className="c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="cv">
           <button className="dCV" onClick={downloadCV}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
