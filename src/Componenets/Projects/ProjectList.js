import  React, {useState } from 'react'
import './Projects.css'
import { FcExpand, FcCollapse } from 'react-icons/fc'

const ProjectList = ({name, description, projectLink, techUsed, }) => {

    const [showDescription, setShowDescription] = useState(false);

    const changeShowDescriptionState = ()=>{
        setShowDescription(!showDescription)
    }

   return (

        <div className='project-list-instance' 
             onMouseEnter={()=>setShowDescription(true)}
             onMouseLeave={()=>setShowDescription(false)}>

            <div className='title-and-collapse-option'>
                <h5> {name} </h5>

                { showDescription ? (
                    <p> <FcCollapse size={20} /> </p>                
                ):(
                    <p> <FcExpand size={20} /> </p>
                )}
                
            </div>

            <div className='row'>
                {techUsed.map((item, index)=>(        
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='project-tech-name'>
                            {item.techName} 
                        </div>
                    </div>
                ))}
            </div>

            <div className='project-instance-demo-btn'>
                <a target='_blank' href='https://google.com'> Live Demo </a>
            </div>

            { showDescription ? (
                <div className='project-instance-description' >
                    {description}
                </div>                
            ):(
                <div className='project-instance-description' >
                    {description.substring(0, 20)}...
                </div> 
            )}

        </div>

  )
}

export default ProjectList 