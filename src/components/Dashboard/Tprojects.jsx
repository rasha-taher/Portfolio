const Projects = ({ title, image, description }) => {
  const handleDeleteProject = () => {
    fetch(
      `https://portfolio-back-end-ija7.onrender.com/projects/deleteProject/${title}`,
      {
        method: "DELETE",
      }
    )
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
    <div className="dash-projects">
      <p className="dash-project-title"> {title}</p>
      <img src={image} alt={title} />
      <p className="dash-project-desc">{description}</p>
      <button className="email-name-button" onClick={handleDeleteProject}>
        Delete this project
      </button>
    </div>
  );
};

export default Projects;
