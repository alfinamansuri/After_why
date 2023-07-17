import React from 'react'
import Siteheader from '../../components/Siteheader';
import Sitefooter from '../../components/Sitefooter';
import Auth_left from '../../components/auth_left'; 
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


function forgot_password() {
  return (
    <div>
                           <div className="auth-page login_page">
        <Siteheader></Siteheader>
        <div className="auth-detail">
        <h1></h1>
        <div className="inner-container">
        <div className="auth-inner">
            <div className="auth-left-block">
                <Auth_left></Auth_left>
            </div>
            <div className="auth-right-block">
                <div className="auth-right">
                <div className="auth-title">
                    <h2>Forgot Password</h2>
                    <h4>Request New Password</h4>
                    </div>
                    <form>
                        
                      
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="email" label="Email*" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group-wrap button-block">

                        <button  className="primary-btn black-bg" title="Send">Send</button>
                       <p><Link to="/" title="Go Back">Go Back</Link></p> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        <Sitefooter></Sitefooter>
        </div>
    </div>
  )
}

export default forgot_password
