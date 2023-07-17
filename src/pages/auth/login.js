import React from 'react'
import Siteheader from '../../components/Siteheader';
import Sitefooter from '../../components/Sitefooter';
import Auth_left from '../../components/auth_left'; 
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


function login() {
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
                    <h2>Log in</h2>
                    <h4>Sign In to continue</h4>
                    </div>
                    <form>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="Email" label="Email*" className="form-control"  />
                            </div>
                        </div>
                      
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="password" label="Password*" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group-wrap button-block">

                        <button  className="primary-btn black-bg" title="Pay $54.99 per month">Sign in</button>
                       <p><Link to="/" title="Forget you Password?">Forget you Password?</Link></p> 
                        </div>
                    </form>
                    <p className="account-link ">Do you have an Account? <Link to="" title="Terms Privacy"> Sign Up</Link></p>
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

export default login
