import React, {useState} from 'react'
import './Projects.css'
import ProjectList from './ProjectList'

const Projects = () => {

    const [showMoreProjects, setShowMoreProjects] = useState(4);

    const loadMoreProjects = ()=>{
      setShowMoreProjects((prev)=>prev+2)
    }

    const data = [
        {
            name: 'GameWave',
            description: 'A website where you can buy gaming accessories. Users can make accounts, add items to cart and then make purchases. ',
            projectLink: 'https://github.com/SagarSingh1324/GameWave',
            techUsed: [
                {techName: 'ReactJS'},
                {techName: 'Bootstrap'},
                {techName: 'ExpressJS'},
                {techName: 'MongoDB'},
            ]
        },
        {
            name: 'IITMBiteView',
            description: 'A website where IITM students can see if mess is open currently. They can also see what the current meal is or what the next meal will be.',
            projectLink: 'https://github.com/SagarSingh1324/IITMBiteView',
            techUsed: [
                {techName: 'NextJS'},
                {techName: 'TailwindCSS'},
                {techName: 'GitHub Actions'},
            ]
        },
        {
            name: 'DigiMandir',
            description: 'Shorthand for Digital Mandir. Using this app, devotees can pray anytime, listen to prayers and make donations to temples as well.',
            projectLink: 'https://github.com/SagarSingh1324/DigiMandir',
            techUsed: [
                {techName: 'ReactNative'},
                {techName: 'Expo'},
                {techName: 'NativeBase'},
                {techName: 'Firebase'},
            ]
        },
        {
            name: 'Portfolio Website',
            description: 'This is the website you are currently on! As you can use see, here you can see my portfolio, download my resume and contact me.',
            projectLink: 'https://github.com/SagarSingh1324/PortfolioWebsite',
            techUsed: [
                {techName: 'ReactJS'},
                {techName: 'Bootstrap'},
                {techName: 'GitHub Actions'},
            ]
        },
        {
            name: 'IITM NetAccess',
            description: 'A desktop app using which you can automate the task of renewing your intenet connection on IITM lan network.',
            projectLink: 'https://github.com/SagarSingh1324/NetAccess',
            techUsed: [
                {techName: 'ElectronJS'},
                {techName: 'ExpressJS'},
                {techName: 'NodeJS'},
                {techName: 'Selenium'},
            ]
        },
        {
            name: 'QRScanner',
            description: 'A simple QR Scanner app. Not a full fledged project. I made it to get familiar with basics of Android development.',
            projectLink: 'https://github.com/SagarSingh1324/QRScanner',
            techUsed: [
                {techName: 'Android Studio'},
                {techName: 'Java'},
            ]
        },
    ]


  return (
    <div className='container projects' id='projects'>
       
       <div className='projects-section-title'>
            <h5> Projects </h5>
        </div>

        <div className='row'>

            {data.slice(0, showMoreProjects).map((item, index)=>(        
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                    
                    <ProjectList {...item} />

                </div>
            ))}

        </div>

        { showMoreProjects >= data.length ? null : (
                <span className='load-more-projects' onClick={loadMoreProjects}>
                    Load More
                </span>
        )}

    </div>
  )
}

export default Projects