import React from 'react'
import Siteheader from '../../components/Siteheader';
import Sitefooter from '../../components/Sitefooter';
import Auth_left from '../../components/auth_left'; 
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


function paycard() {
  return (
    <div>
               <div className="auth-page pay_card_page">
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
                    <h2>Pay Card</h2>
                    <form>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="Email" label="Email*" className="form-control"  />
                            </div>
                        </div>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="info" label="Card Information*"  className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group-wrap two-col">
                            <div className="form-group">
                                <TextField id="password" label="Name of the Card*" className="form-control" />
                            </div>
                            <div className="form-group">
                                <TextField id="password" label="Name of the Card*" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group-wrap">
                            <div className="form-group">
                                <TextField id="password" label="Name of the Card*" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group-wrap button-block">

                        <button  className="primary-btn black-bg" title="Pay $54.99 per month">Pay $54.99 per month</button>
                        </div>
                    </form>
                    <p className="account-link ">Powered by <b>Stripe</b> <span>|</span><Link to="" title="Terms Privacy" className="privacy-link"> Terms Privacy</Link></p>
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

export default paycard
