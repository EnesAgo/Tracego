import React from 'react'
import '../../styles/style.css'

function Footer() {
      return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Tracego</h3>
                        <p className="footer__description">This is a website specially prepared for Turkey only,  <br /> our services will start gradually in other countries. 
                           
                        </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="#about" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#home" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="#place" className="footer__link">Places</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Plan y Pricing</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Share</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="contact.html" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2023 Tracego. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="#" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
      )
  }


export default Footer;