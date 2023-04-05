import "./WorkCardStyles.css";
import projectImg from "../assets/projectImg.jpg";
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={projectImg} alt="Image"/>
                <h2 className="project-title">
                    Transport Company

                </h2>
                <div className="pro-details">
                 <p>This is transport company web-application build using ASP.NET, it manages the user and admin requests such as booking and tracking shipments, managing user data,etc.</p>
                </div>
                <div className="pro-btns">
                    <NavLink to="https://drive.google.com/file/d/1iM-YX0NMbx2sbPA7_uIwToyp_v4koAo9/view?usp=share_link" className="btn1">View</NavLink>
                    <NavLink to="https://drive.google.com/drive/folders/1v2vw7VGEZbLaKxaCgzLYZw0yjdKX83Hh?usp=share_link" className="btn2">Source</NavLink>

                </div>

            </div>
        </div>

    </div>
  )
}

export default WorkCard