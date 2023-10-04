import React, { useState } from "react";

const DeleteProject = () => {
  const [projectTitle, setProjectTitle] = useState("");

  const handleInputChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleDeleteProject = () => {
    fetch(`http://localhost:5000/projects/deleteProject/${projectTitle}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          window.alert("Project deleted successfully!");
        } else {
          window.alert("Project couldn't be deleted!");
        }
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  return (
    <div>
      <div className="email" id="email">
        <h2>Delete Project</h2>
        <div className="email-search">
          <p className="email-label">
            Enter a Project title you want to delete
            <br />
          </p>
          <input
            className="email-name-search email-search-title"
            placeholder="Enter a Project Title"
            value={projectTitle}
            onChange={handleInputChange}
          ></input>
          <button className="email-name-button" onClick={handleDeleteProject}>
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProject;
