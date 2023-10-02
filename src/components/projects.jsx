import React from 'react'
import { useState } from "react";
import AddProject from "./addproject"
import DeleteProject from './deleteprojects'
import DisplayProject from './displayProjects'
import UpdateProject from './updateProjects'

const Projects = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div id='projects'>
      <div className="container">
        <div className="email" id="projects">
          <h2>Projects</h2>
          <div className="projects-buttons">
            {["display", "add", "delete", "update"].map(section => (
              <button
                key={section}
                className="email-name-button"
                onClick={() => handleClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} Project
              </button>
            ))}
          </div>

          <div className='dash-content'>
            {activeSection === "display" && <DisplayProject />}
            {activeSection === "add" && <AddProject />}
            {activeSection === "delete" && <DeleteProject />}
            {activeSection === "update" && <UpdateProject />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
