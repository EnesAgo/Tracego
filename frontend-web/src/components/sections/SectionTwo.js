import React from 'react'
import '../../styles/style.css'

function SectionTwo() {
      return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title about__title">More Information <br />About Tracego!</h2>
                    <p className="about__description">Our aim is to provide information about countries to our visitors, and to offer them a special opportunity so that they can spend a nice and quality time with their families, most people choose us because they know that we are the best at this .
                    </p>
                    <a href="#place" className="button">Reserve a place</a>
                </div>

                <div className="about__img">
                    <div className="about__img-overlay">
                        <img src="http://localhost:3000/assets/img/about1.png" alt="" className="about__img-one" />
                    </div>

                    <div className="about__img-overlay">
                        <img src="http://localhost:3000/assets/img/about2.png" alt="" className="about__img-two" />
                    </div>
                </div>
            </div>
        </section>
      )
  }


export default SectionTwo;