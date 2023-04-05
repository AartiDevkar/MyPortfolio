import "./FooterStyle.css"
import React from 'react'
import {FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import { redirect } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Powai Mumbai.</p>
                        <p>India.</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <h4>+91 9867955110</h4>
                    </div>
                </div>
                <div className="mail">
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <h4>aartideokar2003@gmail.com</h4>
                    </div>
                </div>  

                
            </div>
            <div className="right">
                <div className="aboutme">
                    <p>This is me Aarti Devkar. Pursuing Bsc. Computer Science,<br></br> from Ramnarain Ruia College.
                        
                    </p>
                    <p> I love Working in team and learning new things.</p>
                   
                </div>
                <div className="social">
                <FaFacebook size={25} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size={25} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaLinkedinIn size={25}  style={{color:"#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer