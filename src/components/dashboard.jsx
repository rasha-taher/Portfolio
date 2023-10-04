import Emails from './Dashboard/emails';
import Cv from './Dashboard/cv'
import Projects from'./Dashboard/projects'
import { useState } from "react";
;
function Dashboard( ) {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    switch(section) {
      case "email":
        setActiveSection("email");
        break;
      case "project":
        setActiveSection("project");
        break;
      case "cv":
        setActiveSection("cv");
        break;
      default:
        setActiveSection("default");
    }
  };
  return (
    <div className="Dashboard">
      <div className='side-menu'>
        <p className='dash-title'> Dashboard</p>
        <ul className='dash-menu'>
          <li className='dash-menu-item' onClick={() => handleClick("email")}>Emails</li>
          <li className='dash-menu-item'onClick={() => handleClick("project")}>Projects</li>
          <li className='dash-menu-item' onClick={() => handleClick("cv")}>Cv</li>
        </ul>
      </div>
          <hr/>
      <div className='dash-content'>
      <div id="dash-email" style={{ display: activeSection === "email" ? "block" : "none" }}>
        <Emails />
      </div>
      <div id="dash-projects" style={{ display: activeSection === "project" ? "block" : "none" }}>
        <Projects />
      </div>
      <div id="dash-cv" style={{ display: activeSection === "cv" ? "block" : "none" }}>
        <Cv />
      </div>
      <div id="dash-default" style={{ display: activeSection === "default" ? "block" : "none" }}>
       <h2> Welcome </h2>
      </div>
    </div>
      </div>
  );
}

export default Dashboard;
