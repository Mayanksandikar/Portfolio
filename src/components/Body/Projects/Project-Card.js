import React from 'react'
import Projects from './Index'
import "./Project-card.css" 
const ProjectCard = ( { project }) => {
    return (
        <div className="project-card">  
             <div className="project-info">
                <label className="project-title" > { project.title } </label> 
             <div className="project-links">
                    {project.demo && ( 
                    <a className= "project-link" href={project.demo}>  
                    <div className="link-button">
                    <i class="fa-solid fa-desktop"></i>demo
                         </div>

                    </a>
                    )} 

                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tag.map((tag)=>{
                        return(
                            <label className="tag">{tag}</label>
                        )
                    })}

                </div>
            <img src={project.image} className="project-photo" />
            </div> 
            
                
        </div>
    )
}

export default ProjectCard
