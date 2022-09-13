import React from 'react'
import SocialContact from '../../Comman/Sco-contat/Index'
import Separator from '../../Comman/sperotor/Index'
import './contact.css'
const Contact = () => {
    return (
        <div className="contact">
        
            <Separator />

            <label className ="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p className="">Want to get in touch?  Contact me on any of the platform </p>
                   
                    <SocialContact />

                </div>
                <div className="download">
                    <a download href= {require('../../../Asset/mayank.pdf')}>
                        download CV
                    </a>
                    </div>
                    </div>
                    </div>
           
            
   
    )
}

export default Contact
