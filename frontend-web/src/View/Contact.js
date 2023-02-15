import React from 'react'
import '../assets/css/contact.css'
import { Link } from 'react-router-dom';

function Contact() {
      return (
        <>
              <Link to={`/`}>
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEX///8jGRcAAACOi4pnYmAOAAAWBgD8/fwGAAAgFRKzsbK2tLIhFxTBvsAeExDi4eDFxsX29vUbDQgiHBkvKCgxKyja2NkUAACdmpkTCAY8Nzbu7utRS0lwa2m7uLnQz80c+XeYAAABFklEQVRoge3YXW/CMAyF4SSUwmAU1jG6r27//1+ubkbVXZVJ0fGkvc810pGtOHUIAQAAAAAAAMA/cTxd9KGbTdi3KT3rg8Nu28SYHsSxlnsfh+CjOnefLLd5GUqXOqRouUPBwuCxXsttH8WNDruce5bWO8jnqn66WPEq1uftndVrubLY3Ocx9yzPHett5Ofqe361cxTm8ysMnua3eX278fel5PmNzXtfLeoP5XpyGs+zJdfLuvRRKjdUXfyFrnIKXvfFgqdWt123XvZZLPh6uOp+dYNyN5vjOP1YAKQ3l9+V6fWR8Pss+i0CxmX1CY7Lntt6a2YLgdL8CSNPzvOsLnm6SdTPVMeHuXH5KwIAAAAAAADAH/AFBvcORJdPJDoAAAAASUVORK5CYII=" 
                    className="contacttopA"
                />
            </Link>

            <div className="contactcontainer">
            <div className="contactform">
                <div className="contactcontact-info">
                <h3 className="contacttitle">Let's get in touch.</h3>
                <p className="contacttext">
                    Hello!, this is our Contact Form page, if you have questions or anything else you can text us. Thank you for visiting our website.
                </p>

                <div className="contactinfo">
                    <div className="contactinformation">
                    <img src="assets/img/location.png" className="contacticon" alt="" />
                    <p>Yahya Kemal College , Misleshevo</p>
                    </div>
                    <div className="contactinformation">
                    <img src="assets/img/email.png" className="contacticon" alt="" />
                    <p>enesago010@gmail.com</p>
                    </div>
                    <div className="contactinformation">
                    <img src="assets/img/phone.png" className="contacticon" alt="" />
                    <div className="contactphone">
                        <p>+389-75-324-192</p> 
                        <p>+389-70-600-370</p>
                    </div>
                    </div>
                </div>

                <div className="contactsocial-media">
                    <p>Connect with us :</p>
                    <div className="contactsocial-icons">
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </div>
                </div>
                </div>

                <div className="contactcontact-form">
                <span className="contactcircle one"></span>
                <span className="contactcircle two"></span>

                
                <form action="https://formspree.io/f/xqknpgkd" autocomplete="off" method="post">


                    <h3 className="contacttitle">Contact Form</h3>
                    <div className="contactinput-container">
                    <input type="text" name="name" className="contactinput" />
                    <label>Name Surname</label>
                    
                    </div>
                    <div className="contactinput-container">
                    <input type="email" name="email" className="contactinput" />
                    <label>Email Adress</label>
                    <span>Email Adress</span>
                    </div>
                    <div className="contactinput-container">
                    <input type="tel" name="phone" className="contactinput" />
                    <label>Phone Number</label>
                    <span>Phone Number</span>
                    </div>
                    <div className="contactinput-container textarea">
                    <textarea name="message" className="contactinput"></textarea>
                    <label></label>
                    <span>Message</span>
                    </div>
                    <input type="submit" value="Send" className="contactbtn" />
                </form>
                </div>
            </div>
            </div>
        </>
      )
  }


export default Contact;