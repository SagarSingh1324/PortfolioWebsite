import './Contact.css';
import contact2 from '../../Images/contact2.jpg';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const jobType = form.jobType.value;
    const description = form.description.value;

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nJob Type: ${jobType}\nDescription:\n${description}`
    );

    window.location.href = `mailto:sagarsinghprj@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className='container contact-section' id='contact'>

      <div className='contact-form-title'>
        <h5> Contact Me </h5>
      </div>

      <div className='row'>

        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
          <div className='contact-form-image'>
            <img src={contact2} alt='' />
          </div>
        </div>

        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
          <form onSubmit={handleSubmit}>
            <div className='contact-form-design'>

              <div className='contact-form-field'>
                <label className='contact-form-label'>Name</label>
                <input type='text' name="name" className='contact-form-input' required />
              </div>

              <div className='contact-form-field'>
                <label className='contact-form-label'>E-Mail</label>
                <input type='email' name="email" className='contact-form-input' required />
              </div>

              <div className='contact-form-field'>
                <label className='contact-form-label'>Job Type</label>
                <select name="jobType" className='custom-select-tag'>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Freelance Project</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className='contact-form-field'>
                <label className='contact-form-label'>Job Description</label>
                <textarea name="description" rows='10' className='job-desc-input' required />
              </div>

              <div className='submit-btn'>
                <button type="submit" className='send-button'>
                  Send <RiSendPlaneFill size={20} />
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
