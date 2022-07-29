import React, {useState } from 'react'
import './Partners.scss';

function Partners() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        skill_level: 'amatuer',
        gender: '',
    })

    const onChangeHandler = (event: any) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        console.log(formData)
    }
  return (
    <>
    <h1 className="section__title">Partners</h1>
    <form onSubmit={onSubmitHandler}>
    <div className='form-group'>
        <label htmlFor='username' className='form-label'>User Name</label>
        <input className='form-control' name='username' onChange={onChangeHandler}/>
    </div>
    <div className='form-group'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input className='form-control' name='email' onChange={onChangeHandler}/>
    </div>
    <div className='form-group'>
        <label htmlFor='phone' className='form-label'>phone</label>
        <input className='form-control' name='phone' onChange={onChangeHandler}/>
    </div>
    <div className='form-group'>
        <label htmlFor='skill_level' className='form-label'>skill level</label>
        <select className='form-select' name='skill_level' onChange={onChangeHandler}>
            <option value='amatuer'>amatuer</option>
            <option value='proficient'>proficient</option>
            <option value='expert'>expert</option>
        </select>
    </div>
    <div className='form-group'>
        <label htmlFor='gender' className='form-label'>gender</label>
        <div>
            <div>
                <input type='radio' name='gender' value='male' onChange={onChangeHandler}/>
                <label htmlFor='male'>male</label>
            </div>
            <div>
                <input type='radio' name='gender' value='female' onChange={onChangeHandler}/>
                <label htmlFor='female'>female</label>
            </div>            <div>
                <input type='radio' name='gender' value='other' onChange={onChangeHandler}/>
                <label htmlFor='other'>other</label>
            </div>
        </div>
    </div>
    <div>
        <button className='btn' type='submit'></button>
    </div>
    </form>
    </>
  )
}

export default Partners