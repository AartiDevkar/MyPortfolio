import React from 'react'
import "./FormStyles.css";
import { redirect } from 'react-router-dom';
const Form = () => {
  return (

   
<div className='form'> 
    <form  onSubmit={redirect}>
    <label>Name: </label> 
    <input type="text" required/>
    <label>Email: </label> 
    <input type="email" required/>
    <label>subject: </label> 
    <input type="text" required/>
    <label>Enter Your Message: </label> 
    <textarea rows={6} placeholder='Enter your message her' required/>
    <button className='btn1'>SUBMIT</button>
    
    </form>
    </div>
  )
}

export default Form