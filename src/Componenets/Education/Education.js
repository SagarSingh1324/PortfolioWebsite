import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {

  const educationData = [
    {
      institutionName: 'HVP School',
      degree: '10th Standard',
      CGPA: '8.9',
      description: 'this is the education description',
      year: '2016-2018',
    },
    {
      institutionName: 'HVP School',
      degree: '12th Standard',
      CGPA: '9.5',
      description: 'this is the education description',
      year: '2018-2020',
    },
    {
      institutionName: 'IIT M',
      degree: 'B.tech',
      CGPA: '7.0',
      description: 'this is the education description',
      year: '2018-2022',
    },
    {
      institutionName: 'IIM B',
      degree: 'MBA',
      CGPA: '8.0',
      description: 'this is the education description',
      year: '2022-2024',
    },
  ]

  const workColors = [
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2',
  ]

  return (
    <div className='container education-section' id='education'>

      <div className='education-section-title'>
          <h5>Education</h5>
      </div>

      <VerticalTimeline lineColor='blueviolet'>  

      {educationData.map((item, index) => (

        <VerticalTimelineElement
          className='vectical-timeline-element-education'
          contentStyle={{color: 'black', background: workColors[index] }}
          contentArrowStyle={{ borderRight: '7px solid black'}}
          date={item.year}
          iconStyle={{ background: workColors[index], color:'#fff'}}
          icon={<FaGraduationCap />}
        >
          <h3 className='institute-name'> {item.institutionName} </h3>
          <h4 className='degree'> {item.degree} </h4>
          <h5 className='cgpa'> {item.CGPA} </h5>
          <p className='job-description'> {item.description} </p>
        </VerticalTimelineElement>

      ))}

      </VerticalTimeline>

    </div>
  )
}

export default Education