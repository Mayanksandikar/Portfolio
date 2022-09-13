import React from 'react'
import SocialContact from '../../Comman/Sco-contat/Index'
import "./about.css"
const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                 <div className="about-info">
                    Hello There, I am <span className="info-name">Mayank Sandikar</ span >.
                    <br />
                    I love to designed to web.
                 </div>
                 <div className="about-photo">
                    <img src={require("../../../Asset/img1.png")}
                    className="picture" 
                    />

                 </div>
            
            </div>
      <SocialContact />
        </div>
    )
}

export default About
