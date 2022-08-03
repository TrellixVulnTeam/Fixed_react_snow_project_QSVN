import React from 'react'
import './Home.scss'
import emailjs from 'emailjs-com'

export const Home = () => {
  
    const sendEmail = (e: any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sqb235x', 'template_do3t8en', e.target, 'Eanj1W0BJcs7hPaQS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }

return (
    <>
    <h1 className="section__title">Contact Us</h1>
    <form onSubmit={sendEmail}>
    
    <div className='form-group'>
        <label htmlFor='name' className='form-label'>Full Name</label>
        <input className='form-control' name='name'/>
    </div>

    <div className='form-group'>
        <label htmlFor='email' className='form-label'>Email Address</label>
        <input className='form-control' name='email'/>
    </div>

    <div className='form-group'>
        <label htmlFor='phone' className='form-label'>Phone</label>
        <input className='form-control' name='phone'/>
    </div>

    <div className='form-group'>
        <label htmlFor='skill_level' className='form-label'>Skill Level</label>
        <select className='form-select' name='skill_level'>
            <option value='amatuer'>Amatuer</option>
            <option value='proficient'>Proficient</option>
            <option value='expert'>Expert</option>
        </select>
    </div>

    <div className='form-group'>
        <label htmlFor='gender' className='form-label'>Gender</label>
        <div>
            <div>
                <input type='radio' name='gender' value='male'/>
                <label htmlFor='male' className='gender-option'>Male</label>
            </div>
            <div>
                <input type='radio' name='gender' value='female'/>
                <label htmlFor='female' className='gender-option'>Female</label>
            </div>            <div>
                <input type='radio' name='gender' value='other'/>
                <label htmlFor='other' className='gender-option'>Other</label>
            </div>
        </div>
    </div>

    <div className='form-group'>
        <label htmlFor='subject' className='form-label'>Subject</label>
        <input className='form-control' name='subject'/>
    </div>

    <div className='form-group'>
        <label htmlFor='description' className='form-label'>Description</label>
        <textarea className='form-text' name='description'/>
    </div>

    <div>
        <button className='btn' type='submit'>Submit here</button>
    </div>

    </form>
    </>
)
}

export default Home