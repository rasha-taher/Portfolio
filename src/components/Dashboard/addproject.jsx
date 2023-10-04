import React from 'react'

import { useState } from "react";
const Addproject = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
  
    const handleAddProject = async () => {
      const projectBody = {title , image ,description };
      console.log(projectBody);
      try {
        const response = await fetch("http://localhost:5000/projects/addProject", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectBody),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          window.alert("Project added successfully!");
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error:", error);
        window.alert("Error adding project. Please try again later.");
      }
    };
  return (
   
      <div className="">
          <h3> Add Project</h3>
          <div className="email-search">
            <p className="email-label"> Enter a Project title<br/></p>
            <input className="email-name-search" placeholder="Enter a Name"  onChange={(e) => setTitle(e.target.value)}></input>
            <input className="email-name-search" placeholder="Upload Image " onChange={(e) => setImage(e.target.value)}></input>
            <textarea className="add-project-desc" placeholder="Enter Description for your project"  onChange={(e) => setDescription(e.target.value)}></textarea>
              <button className="email-name-button" onClick={handleAddProject}> Add Project</button>
          </div>
    </div>
    
  )
}

export default Addproject;