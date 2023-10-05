import ProjectSlider from "../components/ProjectSlider";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ProjectsComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl =
      "https://portfolio-back-end-ija7.onrender.com/projects/getAllProjects";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      <div className="project-container" id="project">
        <p className="title">Projects</p>
        <ProjectSlider projects={data} />
      </div>
    </div>
  );
};

export default ProjectsComponent;
