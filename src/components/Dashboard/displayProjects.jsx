import React from "react";
import Tprojects from "./Tprojects";
import axios from "axios";
import { useState, useEffect } from "react";

const DisplayProjects = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = "http://localhost:5000/projects/getAllProjects";
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
      <h2>Display all projects:</h2>
      <div className="project-container">
        {data.map((projects) => (
          <Tprojects
            title={projects.title}
            image={projects.image}
            description={projects.description}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default DisplayProjects;
