import React from 'react'
import Separator from '../../Comman/sperotor/Index'
import { SkillsData } from '../../data/Skills'
import SkillCard from './skill-card'
import './skill.css'
const Skill = () => {
        const  data =SkillsData

    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section"> 
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map(( skill )=> {
                                return(
                                    <SkillCard  skill= {skill} />
                                )
                                   
                        

                                
                            })}
                        </div>

                        </div>
                    )
                })}

            </div>
            
        </div>
    )
}

export default Skill
