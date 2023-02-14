import React from 'react'
import '../../../assets/css/city.css'

function CitySectionThree({placeName}) {

      return (
            <section className="room top" id="room">
            <div className="container">
            <div className="heading_top flex1">
                <div className="heading">
                <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
                <br /> 
                <h2>Rooms & Suites</h2>
                <br />
                </div>
            </div>
        
            <div className="content grid">
                <div className="box">
                <div className="img">
                    <img src="http://localhost:3000/assets/img/r1.jpg" alt="" />
                </div>
                <div className="text">
                    <h3>Superior Soble Rooms</h3>
                    <p> <span>$</span>129 <span>/per night</span> </p>
                </div>
                </div>
                <div className="box">
                <div className="img">
                    <img src="http://localhost:3000/assets/img/r2.jpg" alt="" />
                </div>
                <div className="text">
                    <h3>Superior Soble Rooms</h3>
                    <p> <span>$</span>129 <span>/per night</span> </p>
                </div>
                </div>
                <div className="box">
                <div className="img">
                    <img src="http://localhost:3000/assets/img/r3.jpg" alt="" />
                </div>
                <div className="text">
                    <h3>Superior Soble Rooms</h3>
                    <p> <span>$</span>129 <span>/per night</span> </p>
                </div>
                </div>
            </div>
            </div>
        </section>
      )
  }


export default CitySectionThree;



