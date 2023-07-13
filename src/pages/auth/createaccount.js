import React from 'react'
import Siteheader from '../../components/Siteheader';
import Sitefooter from '../../components/Sitefooter';
import Auth_left from '../../components/auth_left'; 
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';



function createaccount() {
  return (
    <div>
        <div className="auth-page">
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
                    <h2>Create Account To Get Started </h2>
                    <form>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="name" label="Name *" className="form-control"  />
                            </div>
                        </div>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="email" label="Email *"  className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="password" label="Password *" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group-wrap button-block">
                        <p className="cancel-text">S4.99 per month cancel anytime</p>
                        <buton  className="primary-btn black-bg" title="Sign Up">Sign Up</buton>
                        </div>
                    </form>
                    <p className="account-link">Already have an account? <Link>Sign In</Link></p>
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

export default createaccount
