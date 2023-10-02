import './App.css';
import Emails from './components/emails';
import Cv from './components/cv'
import Projects from'./components/projects'
import { useState } from "react";
function App() {
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
        setActiveSection(null);
    }
  };
  return (
    <div className="App">
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
      <div id="email" style={{ display: activeSection === "email" ? "block" : "none" }}>
        <Emails />
      </div>
      <div id="projects" style={{ display: activeSection === "project" ? "block" : "none" }}>
        <Projects />
      </div>
      <div id="cv" style={{ display: activeSection === "cv" ? "block" : "none" }}>
        <Cv />
      </div>
    </div>
      </div>
  );
}

export default App;
