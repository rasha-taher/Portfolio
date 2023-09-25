import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/project";
import test from "./images/i2.jpg"
import Footer from "./components/footer"
import ProjectSlider from "./components/ProjectSlider";


const projects = [
  { title: "Project 1", image: test, description: "Description 1" },
  { title: "Project 2", image: test, description: "Description 2" },
  { title: "Project 3", image: test, description: "Description 3" },
  { title: "Project 4", image: test, description: "Description 4" },

];

function App() {
  return (
    <div className="App">

      <div className="project-container">
      <p className="title">Projects</p>
      <ProjectSlider projects={projects} />
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
