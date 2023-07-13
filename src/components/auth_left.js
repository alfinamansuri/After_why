import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.svg';
import auth_left_img from '../../src/assets/images/auth_left.png'

function auth_left() {
  return (
    <div className="auth-left">
   
        <div className="auth-upper">
          <div className="auth-logo">
             <Link to="/" title="After why"><img src={logo} alt="After why" /></Link>
          </div>
          <div className="auth-col-logo">
          <i><img src={auth_left_img} alt="" /></i>
          </div>
          </div>
          
          <span className="canvas-text">THE CANVAS MODE</span>
     
    </div>
  )
}

export default auth_left;
