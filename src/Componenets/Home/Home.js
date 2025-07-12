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
                  'Android Developer',
                  'iOS Developer',
                  'Backend Developer',
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
              <a href='https://drive.google.com/file/d/1R35BG0_xWEk0Bo2Zol81ABuDfXuuZGGh/view?usp=sharing' download="SagarSinghCV.pdf">
                Get Resume
              </a>
            </div>
          </div>

      </div>
 
    </div>
  )
}

export default Home