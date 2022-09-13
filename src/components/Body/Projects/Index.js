import React from 'react'
import Separator from '../../Comman/sperotor/Index'
import {ProjectData } from '../../data/Projects'
import ProjectCard from './Project-Card'

import './project.css'
const Projects = () => {
    const data = ProjectData

    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Project</label>
          
        <div> 
            {data.map((project) =>{
                return <ProjectCard project={project}/>
            })}
        </div>
            
        </div>
    )
}

export default Projects
