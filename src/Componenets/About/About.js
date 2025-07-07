import React from 'react'
import './About.css'
import linkedinImage from '../../Images/linkedinImage.jpg'

const About = () => {
  return (
    <div className='container about-section' id='about'> 
        <div className='row'>

            <div className='col-xl-6 col-lg-6 col-md-12 cold-sm-12'>
                <div className='about-image'>
                    <img src={linkedinImage} alt=''></img>
                </div>
            </div>    

            <div className='col-xl-6 col-lg-6 col-md-12 cold-sm-12'>
                <div className='about-details'>
                    <div className='about-title'>
                        <h5>About Me</h5>
                    </div>
                    <p>
                        Hello, I'm Sagar, a cross platform mobile app developer and web developer.
                        I have recently completed my Bachelors in Electrical Engineering from IIT Madras.
                        I have been gaining experience working on various projects that solve real-world problems. . 
                        Feel free to reach out to me through the contact info mentioned in my resume.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About