import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/city.css'

function CityHeader({placeName}) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    const capitalizedPlaceName = placeName.charAt(0).toUpperCase()+ placeName.slice(1)

      return (
          <header className={`header ${scrollPosition>100 && "scroll-header"}`} id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">{capitalizedPlaceName}</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#room" className="nav__link">Rooms</a>
                        </li>
                        <li className="nav__item">
                            <Link to="/" className="nav__link">Go Back</Link>
                        </li>
                    </ul>

                   

                    <i className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
      )
  }


export default CityHeader;