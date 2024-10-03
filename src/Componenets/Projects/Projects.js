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
            name: 'MERN Stack Job Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
            ]
        },
        {
            name: 'MERN Event Management Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
            ]
        },
        {
            name: 'MERN Python Django Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
            ]
        },
        {
            name: 'MERN Online Marketplace Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
            ]
        },
        {
            name: 'MERN Video Streaming Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
            ]
        },
        {
            name: 'MERN TV Shows Compiler Portal',
            description: 'this is the project description',
            projectLink: 'project_link',
            techUsed: [
                {techName: 'NodeJS'},
                {techName: 'ExpressJS'},
                {techName: 'ReactJS'},
                {techName: 'NextJS'},
                {techName: 'VueJS'},
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