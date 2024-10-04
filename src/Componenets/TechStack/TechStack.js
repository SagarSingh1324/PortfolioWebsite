import React, {useState} from 'react'
import './TechStack.css'

const TechStack = () => {

  const techStackColors=[
    '#1f78b4',
    '#3bd6c6',
    '#89ecda',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928',
  ]

  const techStackData=[
    {
        name: 'ReactJS'
    },    
    {
        name: 'ExpressJS'
    },
    {
        name: 'NextJS'
    },
    {
        name: 'ElectronJS'
    },
    {
        name: 'ReactNative'
    },
    {
        name: 'MySQL'
    },
    {
        name: 'MongoDB'
    },
    {
        name: 'Git'
    },
    {
        name: 'GitHub Actions'
    },
    {
        name: 'Jenkins'
    },
    {
        name: 'Ansible'
    },
    {
        name: 'Terraform'
    },

  ]

  const [showMoreTechStack, setShowMoreTechStack] = useState(6);

  const loadMoreTechStack = ()=>{
    setShowMoreTechStack((prev)=>prev+3)
  }

  return (
    <div className='container techstack-section' id='techStack'>

        <div className='tech-stack-section-title'>
            <h5> Tech Stack</h5>
        </div>

        <div className='row'>

            {techStackData.slice(0,showMoreTechStack).map((item, index)=>(
                <div className='cold-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className='tech-content'>
                        <span className='tech-stack-number' style={{backgroundColor:techStackColors[index]}}>
                            {index+1}
                        </span>
                        <p>
                            {item.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        { showMoreTechStack >= techStackData.length ? null : (
                <span className='load-more-tech-stack' onClick={loadMoreTechStack}>
                    Load More
                </span>
        )}

    </div>
  )
}

export default TechStack