import React, { useState } from "react";
import Projects from "../components/project";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="project-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="slide">
            <Projects {...project} />
          </div>
        ))}
      </div>
      <div className="button">
        {" "}
        <button className="slider-button left" onClick={prevProject}>
          {"<"}
        </button>
      </div>
      <div className="button">
        {" "}
        <button className="slider-button right" onClick={nextProject}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
