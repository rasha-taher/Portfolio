import React, { useState } from "react";
import "./dashboard.css";
import EmailComponent from "./Temail"; 
import ProjectComponent from "./projects"; 
import CVComponent from "./cv";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="Header">
        <div className="header">
          <div className="title">Admin Dashboard</div>
          <div className="menu">
            <a href="#email" onClick={() => handleClick("email")}>
              Email
            </a>
            <a href="#projet" onClick={() => handleClick("project")}>
              Project
            </a>
            <a href="#cv" onClick={() => handleClick("cv")}>
              CV
            </a>
          </div>
        </div>
        <div>
          <hr />
        </div>
      </div>

      <div id="email" style={{ display: activeSection === "email" ? "block" : "none" }}>
        <EmailComponent />
      </div>
      <div id="project" style={{ display: activeSection === "project" ? "block" : "none" }}>
        <ProjectComponent />
      </div>
      <div id="cv" style={{ display: activeSection === "cv" ? "block" : "none" }}>
        <CVComponent />
      </div>
    </div>
  );
};

export default Dashboard;
