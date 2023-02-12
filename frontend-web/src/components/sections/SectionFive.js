import React from 'react'
import '../../styles/style.css'

function SectionFive() {
      return (
        <section className="video section">
        <h2 className="section__title">Video Tour</h2>

        <div className="video__container container">
            <p className="video__description">Find out more with our video of the most beautiful and 
                pleasant places for you and your family in Turkey. <br /><br /> Video Owner: <a href="https://www.youtube.com/@leonardodalessandri">Leonardo Dalessandri
                    </a>
            </p>

            <div className="video__content">
                <video id="video-file">
                    <source src="http://localhost:3000/assets/video/turkey.mp4" type="video/mp4" />
                </video>

                <button className="button button--flex video__button" id="video-button">
                    <i className="ri-play-line video__button-icon" id="video-icon"></i>
                </button>
            </div>
        </div>
        </section>
      )
  }


export default SectionFive;