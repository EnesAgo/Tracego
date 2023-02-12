import React from 'react'
import '../../styles/style.css'

function SectionFour() {
      return (
        <section className="experience section">
        <h2 className="section__title">With Our Experience <br /> We Will Serve You</h2>

        <div className="experience__container container grid">
            <div className="experience__content grid">
                <div className="experience__data">
                    <h2 className="experience__number">7</h2>
                    <span className="experience__description">Year <br /> Experience</span>
                </div>

                <div className="experience__data">
                    <h2 className="experience__number">75</h2>
                    <span className="experience__description">Complete <br /> tours</span>
                </div>

                <div className="experience__data">
                    <h2 className="experience__number">250+</h2>
                    <span className="experience__description">Tourist <br /> Destination</span>
                </div>
            </div>

            <div className="experience__img grid">
                <div className="experience__overlay">
                    <img src="http://localhost:3000/assets/img/experience1.png" alt="" className="experience__img-one" />
                </div>
                
                <div className="experience__overlay">
                    <img src="http://localhost:3000/assets/img/experience2.png" alt="" className="experience__img-two" />
                </div>
                
            </div>
        </div>
        </section>
      )
  }


export default SectionFour;