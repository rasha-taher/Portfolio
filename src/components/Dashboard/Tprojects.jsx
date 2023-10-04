const Projects = ({ title, image, description }) => {
    return(
        <div className='dash-projects'>
       <p className="dash-project-title"> {title}</p>
       <p className="dash-project-image"> {image}</p>
        {/* <img className='project-image' src={image}></img> */}
        <p className="dash-project-desc">{description}</p>
        
        </div>
    );
}

export default Projects;
