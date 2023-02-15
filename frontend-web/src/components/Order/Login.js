import React, { useRef, useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext';
import './style.css'
import api from '../../api/api'

function Login({setIsLogedIn}) {

    const loginUserName = useRef()
    const loginPassowrd= useRef()

    const signupUserName = useRef()
    const signupEmail= useRef()
    const signupPassowrd= useRef()
    const signupConfirmPassowrd= useRef()

    const style = {
        margin: "15px 0"
      };

      async function loginForm() {
		const username = loginUserName.current.value;
		const password = loginPassowrd.current.value;

        if(username.length === 0){
            alert("please fill in the blanks")
            return
		}
		if(password.length === 0){
            alert("please fill in the blanks")
            return
		}

		const objData = {
			username: username,
			password: password
		  }
		  const responseData = await api.post('/login', objData)

          console.log(responseData)
          console.log("hi there")

		  if(responseData.error){
			if(username.length === 0 || password.length === 0) return

			if(responseData.error == 'user not found'){
                alert("user not found")
                // return
			}
			else{
                alert(responseData.error)
                // return
			}
            return
		}else{
			setIsLogedIn(true)
		  }
		localStorage.setItem('jwt', JSON.stringify(responseData))
	}

    async function signupForm() {
		const username = signupUserName.current.value;
		const email = signupEmail.current.value;
		const password = signupPassowrd.current.value;
        const confirmPass = signupConfirmPassowrd.current.value;

        if(username.length === 0){
            alert("please fill in the blanks")
            return
		}
		if(password.length === 0){
            alert("please fill in the blanks")
            return
		}
        if(password != confirmPass){
            alert("please write the same passowd")
            return
        }

		const objData = {
			username: username,
            email: email,
			password: password,
		  }
		  const responseData = await api.post('/createuser', objData)

          console.log(responseData)

		  if(responseData.error){
			if(username.length === 0 || password.length === 0) return

			else{
                alert(responseData.error)
                // return
			}
            return
		}else{
			setIsLogedIn(true)
		  }
		localStorage.setItem('jwt', JSON.stringify(responseData))
	}

      return (
        <div style={{display: "flex", justifyContent: "center"}}>

            <div className="login-container" style={{marginTop: "50px"}}>
                <div className="title">
                Sign up
                </div>
                <FluidInput inputRef={signupUserName} type="text" label="name" id="SignUpname" style={style} />
                <FluidInput inputRef={signupEmail} type="email" label="email" id="email" style={style} />
                <FluidInput inputRef={signupPassowrd} type="password" label="password" id="SignUppassword" style={style} />
                <FluidInput inputRef={signupConfirmPassowrd} type="password" label="Confirm password" id="SignUpConfirmpassword" style={style} />
                <Button clickEvent={() => {signupForm()}} buttonText="Sign up" buttonClass="login-button" />
            </div>

            <div className="login-container" style={{marginTop: "50px"}}>
                <div className="title">
                Login
                </div>
                <FluidInput inputRef={loginUserName} type="text" label="name" id="name" style={style} />
                <FluidInput inputRef={loginPassowrd} type="password" label="password" id="password" style={style} />
                <Button clickEvent={() => {loginForm()}} buttonText="log in" buttonClass="login-button" />
            </div>

        </div>
      )
  }



  function Button({clickEvent, buttonClass, buttonText}) {
    return (
        <div onClick={clickEvent} className={`buttonSubmit ${buttonClass}`}>
          {buttonText}
        </div>
      );
  }

  class FluidInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focused: false,
        value: "",
      };
    }
    focusField() {
      const { focused } = this.state;
      this.setState({
        focused: !focused
      });
    }
    handleChange(event) {
      const { target } = event;
      const { value } = target;
      this.setState({
        value: value
      });
    }
    render() {
      const { type, label, style, id, inputRef } = this.props;
      const { focused, value } = this.state;
      
      let inputClass = "fluid-input";
      if (focused) {
        inputClass += " fluid-input--focus";
      } else if (value != "") {
        inputClass += " fluid-input--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-input-holder">
            
            <input 
              className="fluid-input-input"
              type={type}
              id={id}
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.handleChange.bind(this)}
              autoComplete="off"
              ref={inputRef}
            />
            <label className="fluid-input-label" forHtml={id}>{label}</label>
            
          </div>
        </div>
      );
    }
  }
  
  

export default Login;