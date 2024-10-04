import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import {Link} from 'react-scroll'

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
              <Link to='contact' spy={true} smooth={true} offset={-100}>
                Hire Me
              </Link>
            </div>
            <div className='get-resume-button'>
              <a href='https://drive.google.com/file/d/1MIKWJ252eN0pU8wQcMO7Eae0Fn8f3Vkw/view?usp=drive_link' download="SagarSinghCV.pdf">
                Get Resume
              </a>
            </div>
          </div>

      </div>
 
    </div>
  )
}

export default Home