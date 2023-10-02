import Headers from"./components/Header"
import Contact from "./components/Contact";
import Footer from "./components/footer"
import About from "./components/about"
import Skills from "./components/skills"
import ProjectsComponent from "./components/ProjectsComponent";
import './style/a-responsive.css'
import './style/about.css'
import './style/a-responsive.css'
import './style/App.css'
import './style/header.css'
import './style/r-responsive.css'
import './style/responsive.css'
import './style/skills.css'
import './style/style.css'
function App() {
  return (
    <div className="App">
        <Headers/>
        <About/>
        <Skills/>
      <ProjectsComponent />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
