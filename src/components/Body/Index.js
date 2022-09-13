import React from 'react'
import About from './About/Indeex'
import './body.css'
import Contact from './Contact/Index'
import Project from './Projects/Index'
import Skill from './Skill/Index'
import Work from './Work/Index'

const Body = () => {
    return (
        <div className="body">
            <section id="about" >
                <About />
            </section>
            <section id="project"> <Project /> </section>
            <section id="skill"> <Skill /> </section>
            <section id="work"> <Work /> </section>
           
            <section id="contact"> <Contact /></section>
        </div>
    )
}

export default Body
