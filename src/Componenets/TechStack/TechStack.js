import React, {useState} from 'react'
import './TechStack.css'

const TechStack = () => {

  const techStackColors=[
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#e6f598',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2',
  ]

  const techStackData=[
    {
        name: 'ReactJS'
    },    
    {
        name: 'NextJS'
    },
    {
        name: 'NodeJS'
    },
    {
        name: 'C++'
    },
    {
        name: 'Python'
    },
    {
        name: 'Django'
    },
    {
        name: 'UI/UX'
    },
    {
        name: 'JavaScript'
    },
    {
        name: 'C'
    },
    {
        name: 'Git'
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