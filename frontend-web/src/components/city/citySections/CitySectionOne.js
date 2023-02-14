import React from 'react'
import '../../../assets/css/city.css'

function CitySectionOne({placeName}) {

    const capitalizedPlaceName = placeName.charAt(0).toUpperCase()+ placeName.slice(1)

      return (
        <section className="home" id="home">
        <img src={`http://localhost:3000/assets/img/${placeName}home.png`} alt="" className="home__img" />

        <div className="home__container container grid">
            <div className="home__data">
                <span className="home__data-subtitle">Discover More</span>
                <h1 className="home__data-title">The <br /> Rental Places <br /> İn {capitalizedPlaceName}. </h1>

            </div>

            <div className="home__social">
                <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                    <i className="ri-facebook-box-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                    <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" className="home__social-link">
                    <i className="ri-twitter-fill"></i>
                </a>
            </div>
        </div>
        
    </section>
      )
  }


export default CitySectionOne;