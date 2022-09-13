import React from 'react'
import "./work-card.css"
const WorkCard = ({item} ) => {
    return (
        <div className="work-card">
            <div className ="work-info">
                <label className="company-name">{item.company}</label> 

            </div>
            <div className="work-dates">
                 <label className="">{item.dateJoining}</label>-<label>{item.dateEnd}</label>
            </div>
            <div className="work-dese">
                <p>{item.work}</p>
            </div>

            
        </div>
    )
}

export default WorkCard
