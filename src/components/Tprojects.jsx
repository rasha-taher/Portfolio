const Projects = ({ title, image, description }) => {
    return(
        <div className='projects'>
       <p className="project-title"> {title}</p>
        <img className='project-image' src={image}></img>
        <p className="project-desc">{description}</p>
        
        </div>
    );
}

export default Projects;
