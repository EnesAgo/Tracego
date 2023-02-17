import React, { useRef } from 'react'
import '../assets/css/contact.css'
import { Link } from 'react-router-dom';
import api from '../api/api'

function Contact() {

    const fullnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const textRef = useRef();

    async function submitForm(e) {
        e.preventDefault()

        const fullName = fullnameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const text = textRef.current.value;

        const submitData = {
            fullName: fullName,
            email: email,
            phone: phone,
            text: text,
        }

        const response = await api.post("/createmail", submitData)

        fullnameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        textRef.current.value = "";

        if(response.error){
            alert(response.error)
            return
        }

        console.log(response)

        
    }

      return (
        <div style={{background: "#fff"}}>
            <Link to={`/`}>
                <img 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEX///8jGRcAAACOi4pnYmAOAAAWBgD8/fwGAAAgFRKzsbK2tLIhFxTBvsAeExDi4eDFxsX29vUbDQgiHBkvKCgxKyja2NkUAACdmpkTCAY8Nzbu7utRS0lwa2m7uLnQz80c+XeYAAABFklEQVRoge3YXW/CMAyF4SSUwmAU1jG6r27//1+ubkbVXZVJ0fGkvc810pGtOHUIAQAAAAAAAMA/cTxd9KGbTdi3KT3rg8Nu28SYHsSxlnsfh+CjOnefLLd5GUqXOqRouUPBwuCxXsttH8WNDruce5bWO8jnqn66WPEq1uftndVrubLY3Ocx9yzPHett5Ofqe361cxTm8ysMnua3eX278fel5PmNzXtfLeoP5XpyGs+zJdfLuvRRKjdUXfyFrnIKXvfFgqdWt123XvZZLPh6uOp+dYNyN5vjOP1YAKQ3l9+V6fWR8Pss+i0CxmX1CY7Lntt6a2YLgdL8CSNPzvOsLnm6SdTPVMeHuXH5KwIAAAAAAADAH/AFBvcORJdPJDoAAAAASUVORK5CYII=" 
                    className="contacttopA"
                    style={{
                        background: "#fff", 
                        width: "80px", 
                        cursor: "pointer", 
                        position: "static", 
                        left: "30px",
                        color: "#fff",
                        textAlign: "center",
                        top: "25px",
                        left: "25px"

                    }}
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

                
                <form onSubmit={submitForm} autoComplete="off">


                    <h3 className="contacttitle">Contact Form</h3>
                    <div className="contactinput-container">
                        <input required ref={fullnameRef} type="text" name="name" className="contactinput" />
                        <label>Name Surname</label>
                    </div>
                    <div className="contactinput-container">
                        <input required ref={emailRef} type="email" name="email" className="contactinput" />
                        <label>Email Adress</label>
                        <span>Email Adress</span>
                    </div>
                    <div className="contactinput-container">
                        <input required ref={phoneRef} type="tel" name="phone" className="contactinput" />
                        <label>Phone Number</label>
                        <span>Phone Number</span>
                    </div>
                    <div className="contactinput-container textarea">
                        <textarea required ref={textRef} name="message" className="contactinput"></textarea>
                        <label></label>
                        <span>Message</span>
                    </div>
                    <input type="submit" value="Send" className="contactbtn" />
                </form>
                </div>
            </div>
            </div>
        </div>
      )
  }


export default Contact;