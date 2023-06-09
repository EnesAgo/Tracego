import React, { useState, useEffect } from "react";
import '../../styles/style.css'


function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavOpen, senIsNavOpen] = useState("")
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

    return (
      <header className={`header ${scrollPosition>100 && "scroll-header"}`} id="header">
      <nav className="nav container">
          <h1 href="#" className="nav__logo">Tracego</h1>

          <div className={`nav__menu ${isNavOpen}`} id="nav-menu">
              <ul className="nav__list">
                  <li className="nav__item">
                      <a href="#home" className="nav__link active-link">Home</a>
                  </li>
                  <li className="nav__item">
                      <a href="#about" className="nav__link">About</a>
                  </li>
                  <li className="nav__item">
                      <a href="#discover" className="nav__link">Gallery</a>
                  </li>
                  <li className="nav__item">
                      <a href="#place" className="nav__link">Places</a>
                  </li>
              </ul>

              {/* <div className="nav__dark">
                  <span className="change-theme-name">Dark mode</span>
                  <i className="ri-moon-line change-theme" id="theme-button"></i>
              </div> */}

              <i className="ri-close-line nav__close" id="nav-close"></i>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={() => {isNavOpen ? senIsNavOpen("") : senIsNavOpen("show-menu")}}>
              <i className="ri-function-line"></i>
          </div>
      </nav>
  </header>
    )
}

export default Header;