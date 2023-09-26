import "./App.css";
import "./style.css";
import Headers from"./components/Header"
import Contact from "./components/Contact";
import Footer from "./components/footer"
import ProjectSlider from "./components/ProjectSlider";
import About from "./components/about"
import Skills from "./components/skills"

function App() {
  return (
    <div className="App">
        <Headers/>
        <About/>
        <Skills/>
      <div className="project-container">
      <p className="title">Projects</p>
      
      </div>

      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
