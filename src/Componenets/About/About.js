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
                        Hello, I'm Sagar, an aspiring web app developer with a passion for building dynamic and responsive applications using modern web technologies.
                        I am doing my Bachelors in EE and continuously gaining experience working on projects that solve real-world problems. 
                        I enjoy tackling challenges and continuously learning new skills. Outside of coding, I like archiving media. Let's connect! Feel free to reach 
                        out through the contact info mentioned in my resume.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About