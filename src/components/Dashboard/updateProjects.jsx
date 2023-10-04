import React, { useState } from "react";
import axios from "axios";

const UpdateProjectForm = () => {
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setNewImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }
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
          className="email-name-search"
          accept="image/"
          onChange={convertToBase64}
          type="file"
        ></input>
        <br />
        <button className="email-name-button" type="submit">
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
