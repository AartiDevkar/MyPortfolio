import React from 'react'
import Navbar from '../components/Navbar';
import './aboutus.css'
import Footer from '../components/Footer';

import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='left'>
      <HeroImg2/>
      </div>
       
      
      <div className='myself'>
        <h1 >About Myself!</h1><br></br>
        <p> Hello, I am Aarti Devkar.<br/> Student of Computer Science.<br/> I am passionate about programming and designing. <br/>I like to Sing, paint and play football.  </p>
      </div>
      
      <Footer/>
      
      

    </div>
  )
}

export default About