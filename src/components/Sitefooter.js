import React from 'react'
import { Link } from 'react-router-dom';
import  insta  from '../assets/images/instagram.svg';
import  linked  from '../assets/images/linkedin.svg';
import fb  from '../assets/images/facebook.svg';
import  insta_w  from '../assets/images/instagram-w.svg';
import  linked_w  from '../assets/images/linkedin-w.svg';
import fb_w  from '../assets/images/facebook-w.svg';
import footer_logo  from '../assets/images/footer-logo.svg';


function Sitefooter() {
  return (
    <div>
        <footer className="footer">
          <div className="container">
              <div className="inner-container">
              <div className="upper-footer">
              <Link to="/" title="After why"><img src={footer_logo} alt="After why" /></Link>
              </div>
                <div className="lawer-footer">
                <ul className="footer-links">
                  <li>
                    <Link className="footer-link" title="Home">Home</Link> 
                  </li>
                  <li>
                    <Link className="footer-link" title="About Us">About Us</Link> 
                  </li>
                  <li>
                    <Link className="footer-link" title="Services">Services</Link> 
                  </li>
                  <li>
                    <Link className="footer-link" title="Our values">Our values</Link> 
                  </li>
                  <li>
                    <Link className="footer-link" title="Contact Us">Contact Us</Link> 
                  </li>
                </ul>
                <div className="social-link-block">
                  <ul>
                    <li>
                      <Link to="/"  title="Instagram"><i>
                        <img src={insta} alt="Instagram" className="normal" />
                        <img src={insta_w} alt="Instagram" className="hover" />
                        </i></Link>
                    </li>
                    <li>
                      <Link to="/" title="Linkedin"><i>
                        <img src={linked} alt="Linkedin" className="normal" />
                        <img src={linked_w} alt="Linkedin" className="hover" />
                        </i></Link>
                    </li>
                    <li>
                      <Link to="/" title="Facebook"><i>
                        <img src={fb} alt="Facebook" className="normal" />
                        <img src={fb_w} alt="Facebook" className="hover" />
                        </i></Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-right">
                  <p className="copy-right">&copy; 2021 After The Why</p>
                  <p className="deliver"><span>|</span>   Delivering The What and How</p>
                </div>
                </div>
              </div>
          </div>
        </footer>
    </div>
  )
}

export default Sitefooter
