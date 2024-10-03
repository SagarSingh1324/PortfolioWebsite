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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About