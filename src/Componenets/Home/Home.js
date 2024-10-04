import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className='container-fluid home' id='home'>

      <div className='continer home-content'>
          <h1> Hi I'm a</h1>
          <h2>
            <Typewriter
              options={({
                strings:[
                  'Frontend Developer',
                  'Backend Developer',
                  'Android Developer'
                ],
                autoStart: true,
                loop: true,
                // delay: 3,
              })}
            />
          </h2>

          <div className='button-for-action'>
            <div className='hire-me-button'>
              Hire Me
            </div>
            <div className='get-resume-button'>
              <a href='https://drive.google.com/file/d/1L7LQycEeUvIqLH8Wv91lg9ze3IKqvlzW/view?usp=sharing' download="SagarSinghCV.pdf">
                Get Resume
              </a>
            </div>
          </div>

      </div>
 
    </div>
  )
}

export default Home