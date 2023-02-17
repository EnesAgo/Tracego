import React, { useRef } from 'react'
import './style.css'
import api from '../../api/api'

function OrderForm({setIsLogedIn}) {
    const userData = JSON.parse(localStorage.jwt)
    console.log(userData)

    const chechinRef = useRef()
    const chechoutRef = useRef()
    const roomsRef = useRef()
    const adultsRef = useRef()
    const childrenRef = useRef()


    const style = {
        margin: "15px 0"
      };



      async function submitForm() {
		const chechin = chechinRef.current.value;
		const chechout = chechoutRef.current.value;
		const rooms = roomsRef.current.value;
		const adults = adultsRef.current.value;
		const children = childrenRef.current.value;

		const objData = {
            fullName: userData.username,
            email: userData.email,
            checkin: chechin,
            checkout: chechout,
            rooms: rooms,
            adults: adults,
            children: children
		  }
		  const responseData = await api.post('/createreserve', objData)

          console.log(responseData)
          console.log("hi there")

		  if(responseData.error){
			if(responseData.error == 'user not found'){
                alert("user not found")
                // return
			}
			else{
                alert(responseData.error)
                // return
			}

            chechinRef.current.value = "";
		    chechoutRef.current.value = "";
		    roomsRef.current.value = "";
		    adultsRef.current.value = "";
		    childrenRef.current.value = "";

            return
		}
        else {
            alert("successfully reserved")
        }
	}

      return (
          <div>
                <h4 
                    src="http://localhost:3000/assets/img/rightArrow3.png" 
                    className="contacttopA"
                    style={{
                        background: "rgb(33, 45, 65)", 
                        padding: "5px", 
                        width: "80px", 
                        cursor: "pointer", 
                        position: "relative", 
                        left: "30px",
                        color: "#fff",
                        textAlign: "center"
                    }}
                    onClick={() => {setIsLogedIn(false); localStorage.clear()}}
                >Log Out</h4>

                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "40px"}}>
                    <h1>Welcome Back {userData.username}</h1>

                    <div className="login-container" style={{marginTop: "10px"}}>
                        <div className="title" style={{marginBottom: "20px"}}>
                            Reserve
                        </div>

                        <div className="dates">
                            <div className="form-group" style={{display: "flex", flexDirection: "column"}}>
                                <span className="form-label">Check In</span>
                                <input ref={chechinRef} className="form-control formtime" type="date" required />
                            </div>
                            <div className="form-group" style={{display: "flex", flexDirection: "column"}}>
                                <span className="form-label">Check Out</span>
                                <input ref={chechoutRef} className="form-control formtime" type="date" required />
                            </div>
                        </div>

                        <div className="selects">
                            <div className="form-group select-group">
                                <span className="form-label">Rooms</span>
                                <select ref={roomsRef} className="form-control formselect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                            <div className="form-group select-group">
                                <span className="form-label">Adults</span>
                                <select ref={adultsRef} className="form-control formselect" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                            <div className="form-group select-group">
                                <span className="form-label">Children</span>
                                <select ref={childrenRef} className="form-control formselect">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className={`buttonSubmit login-button`} onClick={submitForm}>
                            Submit
                        </div>

                    </div>

                </div>


          </div>
      )
  }


export default OrderForm;