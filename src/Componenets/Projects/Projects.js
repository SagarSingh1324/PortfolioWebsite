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
            name: 'Gamr',
            description: 'A mobile app where you can track your favorite games, create custom playlists, share your lists, track your playtime etc. One stop for all you gaming needs.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/Gamr', color: 'blue' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ghostrex.gamr', color: 'green' },
            ],
            techUsed: [
                {techName: 'Flutter'},
                {techName: 'Riverpod'},
            ]
        },
        {
            name: 'GymBro',
            description: 'A mobile app where you can track your gym workouts, create templates for various muscle groups, track your gym sessions etc. One stop for all you workout related needs.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/GymBro', color: 'blue' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ghostrex.gymbro', color: 'green' },
            ],
            techUsed: [
                {techName: 'React Native'},
                {techName: 'Expo'},
                {techName: 'Redux'},
            ]
        },
        {
            name: 'GameWave',
            description: 'A website where you can buy gaming accessories. Users can make accounts, add items to cart and then make purchases. This was the project where I first explored and learned web development.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/GameWave', color: 'blue' },
                 { label: 'Website', url: 'https://gamewave.aiospace.online/', color: 'gray' },
            ],
            techUsed: [
                {techName: 'React'},
                {techName: 'Bootstrap'},
                {techName: 'ExpressJS'},
                {techName: 'MongoDB'},
            ]
        },
        {
            name: 'Portfolio',
            description: 'This is the website you are currently on! As you can use see, here you can see my portfolio, download my resume and contact me.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/PortfolioWebsite', color: 'blue' },
                { label: 'Website', url: 'https://sagarsingh1324.netlify.app/', color: 'gray' },
            ],
            techUsed: [
                {techName: 'ReactJS'},
                {techName: 'Bootstrap'},
                {techName: 'GitHub Actions'},
            ]
        },
        {
            name: 'IITMBiteView',
            description: 'A website where IITM students can see if mess is open currently. Once they select their mess, they can also see what the current meal is or what the next meal will be.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/IITMBiteView', color: 'blue' },
                { label: 'Website', url: 'https://sagarsingh1324.github.io/IITMBiteView/', color: 'gray' },
            ],
            techUsed: [
                {techName: 'NextJS'},
                {techName: 'TailwindCSS'},
                {techName: 'GitHub Actions'},
            ]
        },
        {
            name: 'IITM NetAccess',
            description: 'A desktop app using which you can automate the task of renewing your intenet connection on IITM lan network.',
            projectLinks: [
                { label: 'Github', url: 'https://github.com/SagarSingh1324/NetAccess', color: 'blue' },
            ],
            techUsed: [
                {techName: 'ElectronJS'},
                {techName: 'ExpressJS'},
                {techName: 'NodeJS'},
                {techName: 'Selenium'},
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