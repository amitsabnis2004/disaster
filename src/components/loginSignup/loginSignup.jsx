import React from 'react'
import './loginSignup.css'
import user_img from '../assets/user.png'
import email_img from '../assets/email.png'
import password_img from '../assets/pass.png'


const loginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_img} alt="" />
                <input type="text" placeholder='Username'/>
            </div>
            <div className="input">
                <img src={email_img} alt="" />
                <input type="email" placeholder='Email ID'/>
            </div>
            <div className="input">
                <img src={password_img} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default loginSignup