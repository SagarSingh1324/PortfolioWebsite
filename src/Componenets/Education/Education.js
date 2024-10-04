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
      description: 'Completed my 10th standard with a strong foundation in core subjects. Participated in various extracurricular activities, including sports and science fairs.',
      year: '2016-2018',
    },
    {
      institutionName: 'HVP School',
      degree: '12th Standard',
      CGPA: '9.5',
      description: 'Achieved excellent grades in my 12th standard, excelling in Science and Mathematics. Involved in student leadership and organized events for the school.',
      year: '2018-2020',
    },
    {
      institutionName: 'IIT M',
      degree: 'B.Tech',
      CGPA: '7.2',
      description: 'Currently pursuing a B.Tech degree in electrical engineering with a focus on computer science. Engaged in various projects and internships to enhance practical skills.',
      year: '2020-2025',
    },
  ]

  const workColors = [
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