import  React, {useState } from 'react'
import './Projects.css'
import { FcExpand, FcCollapse } from 'react-icons/fc'

const ProjectList = ({ name, description, projectLinks, techUsed }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className='project-list-instance'
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div className='title-and-collapse-option'>
        <h5>{name}</h5>
        <p>{showDescription ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className='row'>
        {techUsed.map((item, index) => (
          <div key={index} className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div className='project-tech-name'>{item.techName}</div>
          </div>
        ))}
      </div>

      <div className='project-instance-demo-btn'>
        {projectLinks.map((link, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
            className={`text-white px-2 py-2 rounded`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className='project-instance-description'>
        {showDescription ? description : `${description.substring(0, 20)}...`}
      </div>
    </div>
  );
};

export default ProjectList 