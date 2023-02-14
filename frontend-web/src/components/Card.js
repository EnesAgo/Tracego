import React from 'react'
import '../styles/style.css'

function Card({img, rating, title, subtitle, price, route}) {
      return (
            <div className="place__card">
                    <img src={`http://localhost:3000/assets/img/${img}`} alt="" className="place__img" />
                    
                    <div className="place__content">
                        <span className="place__rating">
                            <i className="ri-star-line place__rating-icon"></i>
                            <span className="place__rating-number">{rating}</span>
                        </span>

                        <div className="place__data">
                            <h3 className="place__title">{title}</h3>
                            <span className="place__subtitle">{subtitle}</span>
                            <span className="place__price">{price}</span>
                        </div>
                    </div>

                    <button className="button button--flex place__button">
                        <a href={`${route}`}>
                            <img src="http://localhost:3000/assets/img/rightArrow3.png" width="15px" height="25px" />
                        </a>
                    </button> 
            </div>

      )
  }


export default Card;