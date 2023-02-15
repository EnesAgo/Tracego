import React from 'react'
import '../../assets/css/city.css'

function OrderSection({placeName, cityDesc}) {

    const capitalizedPlaceName = placeName.charAt(0).toUpperCase()+ placeName.slice(1)

      return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                    <h2 className="section__title about__title">About<br />{capitalizedPlaceName}</h2>
                    <p className="about__description">
                        {cityDesc}
                    </p>
                </div>

                <div className="about__img">
                    <div className="about__img-overlay">
                        <img src={`http://localhost:3000/assets/img/${placeName}about1.png`} alt="" className="about__img-one" />
                    </div>

                    <div className="about__img-overlay">
                        <img src={`http://localhost:3000/assets/img/${placeName}about2.png`} alt="" className="about__img-two" />
                    </div>
                </div>
            </div>
        </section>
      )
  }


export default OrderSection;



