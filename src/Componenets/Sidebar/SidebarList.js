import React from 'react'
import './SidebarList.css'
import linkedinImage from '../../Images/linkedinImage.jpg'
import {
    FcAbout,
    FcHome,
    // FcNightPortrait,
    FcTodoList,
    FcContacts,
    // FcFactory,
    // FcSalesPerformance,
 } from 'react-icons/fc'

//  import { MdBiotech } from 'react-icons/md'
 import { MdCastForEducation } from 'react-icons/md'
 import {Link} from 'react-scroll'
 import { GrTechnology } from 'react-icons/gr'

const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>

        {expandSidebar ? (        
            <div className='navbar-items'>

                <div className='sidebar-profile-pic'>
                    <img src={linkedinImage} alt='' />
                </div>
    

                <ul>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-100}>
                            <FcHome size={25}/>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={-100}>
                            <FcAbout size={25}/>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' spy={true} smooth={true} offset={-100}>
                            <FcTodoList size={25}/>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='techStack' spy={true} smooth={true} offset={-100}>
                            <GrTechnology size={25} color='green'/>
                            Tech Stack
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='workExperience' spy={true} smooth={true} offset={-100}>
                            <FcFactory size={25}/>
                            Work Experience
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='education' spy={true} smooth={true} offset={-100}>
                            <MdCastForEducation size={25} color='yellow'/>
                            Education
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='testimonial' spy={true} smooth={true} offset={-100}>
                            <FcSalesPerformance size={25}/>
                            Testimonial
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-100}>
                            <FcContacts size={25}/>
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
            ):( 
            <div className='navbar-items-only-icons'>

                <ul>
                    <li className='nav-item'>
                        <FcHome size={25}/>
                    </li>
                    <li className='nav-item'>
                        <FcAbout size={25}/>
                    </li>
                    <li className='nav-item'>
                        <FcTodoList size={25}/>
                    </li>
                    <li className='nav-item'>
                        <GrTechnology size={25} color='green'/>
                    </li>
                    {/* <li className='nav-item'>
                        <FcFactory size={25}/>
                    </li> */}
                    <li className='nav-item'>
                        <MdCastForEducation size={25} color='yellow'/>
                    </li>
                    {/* <li className='nav-item'>
                        <FcSalesPerformance size={25}/>
                    </li> */}
                    <li className='nav-item'>
                        <FcContacts size={25}/>
                    </li>
                </ul>

            </div> 
            )}

    </React.Fragment>
  )
}

export default SidebarList