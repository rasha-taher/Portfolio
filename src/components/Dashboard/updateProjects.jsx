import React, { useState } from "react";
import axios from "axios";

const UpdateProjectForm = () => {
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/projects/update/${title}`,
        {
          title: newTitle,
          description: newDescription,
          image: newImage,
        }
      );
      console.log(response.data);
      setNewTitle("");
      setNewDescription("");
      setNewImage("");
      window.alert("Project updated successfully!");
    } catch (error) {
      console.error("Error updating project:", error);
      window.alert("Error updating project. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update Project</h2>
      <form onSubmit={handleSubmit}>
        <p className="email-label">Current Project Title:</p>
        <br />
        <input
          className="email-name-search"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <p className="email-label">New Title:</p>
        <input
          className="email-name-search"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <p className="email-label">New Description:</p>
        <textarea
          className="email-name-search"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <p className="email-label">New Image URL:</p>
        <input
          className="add-project-desc"
          type="text"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button className="email-name-button" type="submit">
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
