import React, { useState } from "react";

const Addproject = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      window.alert("Error: ", error);
      console.log("Error: ", error);
    };
  }

  const handleAddProject = async () => {
    const projectBody = { title, image, description };
    console.log(projectBody);
    try {
      const response = await fetch(
        "https://portfolio-back-end-ija7.onrender.com/projects/addProject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectBody),
        }
      );

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
      <h2> Add Project</h2>
      <div className="email-search">
        <p className="email-label">
          {" "}
          Enter a Project title
          <br />
        </p>
        <input
          className="email-name-search"
          placeholder="Enter a Name"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className="email-name-search"
          accept="image/"
          onChange={convertToBase64}
          type="file"
          // onChange={(e) => setImage(e.target.value)}
        ></input>
        {image === "" || image === null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} alt="project image"></img>
        )}
        <textarea
          className="add-project-desc"
          placeholder="Enter Description for your project"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="email-name-button" onClick={handleAddProject}>
          {" "}
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Addproject;
