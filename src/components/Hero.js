import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Hero.css';
// import myVideo from "/public/video/1 (1)";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1>Advanture Soul</h1>
                <p>What Are You Waite For?</p>
                <div className="hero-btns">
                    <NavLink className="join_link" to="/src/components/SignUp.js"><button className="join_btn">Join Now</button></NavLink>
                    <button className="trail_btn">Trail Version</button>
                </div>
            </div>
            <video autoPlay loop muted >
                <source src='/video/1 (7).mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Hero
