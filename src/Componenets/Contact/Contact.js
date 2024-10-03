import React from 'react'
import './Contact.css'
import contact2 from '../../Images/contact2.jpg'
import { RiSendPlaneFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='container contact-section' id='contact'>

        <div className='contact-form-title'>
            <h5> Contact Me </h5>
        </div>

        <div className='row'>

            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
                <div className='contact-form-image'>
                    <img src={contact2} alt=''/>
                </div>
            </div>

            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>

                <form>
                    <div className='contact-form-design'>
                        <div className='contact-form-field'>
                            <label className='contact-form-label'>Name</label>
                            <input type='text' className='contact-form-input'/>
                        </div>
                        <div className='contact-form-field'>
                            <label className='contact-form-label'>E-Mail</label>
                            <input type='email' className='contact-form-input'/>
                        </div>
                        <div className='contact-form-field'>
                            <label className='contact-form-label'>Job Type</label>
                            <select className='custom-select-tag'>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Freelance Project</option>
                                <option>Internship</option>
                            </select>
                        </div>                        
                        <div className='contact-form-field'>
                            <label className='contact-form-label'>Job Description</label>
                            <textarea  rows='6' className='job-desc-input' type='text'/>
                        </div>

                        <div className='submit-btn'>
                            <p>Send <RiSendPlaneFill size={20}/></p>
                        </div>
                    </div>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Contact