import React from 'react'
import './WorkExperience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdGroupWork } from 'react-icons/md'

const WorkExperience = () => {

  const workData = [
    {
      companyName: 'Google',
      role: 'Frontend Developer',
      description: 'this is the job description',
      year: '2022-2024',
      techUsed: [
        {
          techName: 'ReactJS'
        },
        {
          techName: 'ExpressJS'
        },
        {
          techName: 'NextJS'
        },
        {
          techName: 'VueJS'
        },
      ]
    },
    {
      companyName: 'Youtube',
      role: 'Backend Developer',
      description: 'this is the job description',
      year: '2024-2026',
      techUsed: [
        {
          techName: 'Django'
        },
        {
          techName: 'Python'
        },
        {
          techName: 'NextJS'
        },
        {
          techName: 'VueJS'
        },
      ]
    },
    {
      companyName: 'Instagram',
      role: 'Android Developer',
      description: 'this is the job description',
      year: '2026-2028',
      techUsed: [
        {
          techName: 'ReactJS'
        },
        {
          techName: 'ExpressJS'
        },
        {
          techName: 'NextJS'
        },
        {
          techName: 'VueJS'
        },
      ]
    },
    {
      companyName: 'Meta',
      role: 'Frontend Developer',
      description: 'this is the job description',
      year: '2028-2030',
      techUsed: [
        {
          techName: 'ReactJS'
        },
        {
          techName: 'ExpressJS'
        },
        {
          techName: 'NextJS'
        },
        {
          techName: 'VueJS'
        },
      ]
    },
  ]

  const workColors = [
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

  return (
    <div className='container work-experience-section' id='workExperience'>

      <div className='work-experience-section-title'>
          <h5>Work Experience</h5>
      </div>

      <VerticalTimeline lineColor='blueviolet'>  

      {workData.map((item, index) => (

        <VerticalTimelineElement
          className='vectical-timeline-element-work'
          contentStyle={{color: 'black', background: workColors[index] }}
          contentArrowStyle={{ borderRight: '7px solid black'}}
          date={item.year}
          iconStyle={{ background: workColors[index], color:'#fff'}}
          icon={<MdGroupWork />}
        >
          <h3 className='company-name'> {item.companyName} </h3>
          <h4 className='job-role'> {item.role} </h4>

          <div className='row'>
            {
              item.techUsed.map((tech, index) => (

                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                  <div className='container tech-skills'>
                    {tech.techName}
                  </div>
                </div>
              
            ))}
          </div>

          <p className='job-description'> {item.description} </p>
        </VerticalTimelineElement>

      ))}

      </VerticalTimeline>

    </div>
  )
}

export default WorkExperience