import "./App.css";
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
