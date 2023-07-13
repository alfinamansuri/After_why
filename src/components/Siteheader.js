import React from 'react'
import logo from '../../src/assets/images/logo.svg'
import { Link } from 'react-router-dom';





function Siteheader() {
  return (
    <div>
         <header className="header">
            <div className="container">
                <div className="inner-container">
                  <Link className="logo" title="After why" to="/">
                   <img src={logo}  alt="after why"/>
                   </Link>
                 </div>
            </div>
        </header>
    </div>
  )
}

export default Siteheader;
