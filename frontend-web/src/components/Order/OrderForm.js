import React from 'react'

function OrderForm({setIsLogedIn}) {
    const userData = JSON.parse(localStorage.jwt)
    console.log(userData)
      return (
          <div>
                {/* <img 
                    src="http://localhost:3000/assets/img/rightArrow3.png" 
                    className="contacttopA"
                    style={{
                        background: "rgb(33, 45, 65)", 
                        padding: "10px", 
                        width: "45px", 
                        transform: "rotate(180deg)", 
                        cursor: "pointer", 
                        position: "absolute", 
                        left: "30px"
                    }}
                    onClick={() => {setIsLogedIn(false); localStorage.clear()}}
                /> */}
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

                <div style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "40px"}}>
                    <h1>Welcome Back {userData.username}</h1>
                </div>


          </div>
      )
  }


export default OrderForm;