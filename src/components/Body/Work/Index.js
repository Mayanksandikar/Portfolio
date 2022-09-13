import React from 'react'
import { WorkData } from '../../data/work'
import WorkCard from './Work-Card'
import './work.css'
const Work = () => {
    const data=WorkData
    return (
        <div className="work">
            <label className="section-title">Work</label>
            <div className="work-list">
                {data.map((item)=>{
                    return(
                        <WorkCard item={item}/>
                    )
                })}

            </div>
        </div>
    )
}
 
export default Work
