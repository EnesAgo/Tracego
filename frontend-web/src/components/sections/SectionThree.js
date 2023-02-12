import React from 'react'
import '../../styles/style.css'
import '../../styles/swiper-bundle.min.css'

function SectionThree() {
      return (
        <section className="discover section" id="discover">
            <h2 className="section__title">Discover the most <br /> attractive places</h2>

            <div className="discover__container container swiper-container">
                <div className="swiper-wrapper">
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover1.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Ankara</h2>
                            <span className="discover__description">24 tours available</span>
                        </div>
                    </div>

                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover2.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">İzmir</h2>
                            <span className="discover__description">23 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover3.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">İstanbul</h2>
                            <span className="discover__description">18 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover5.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Afyonkarahisar</h2>
                            <span className="discover__description">28 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover6.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Yalova</h2>
                            <span className="discover__description">22 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover7.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Antalya</h2>
                            <span className="discover__description">38 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover8.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Tekirdağ</h2>
                            <span className="discover__description">8 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover9.png" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Urfa</h2>
                            <span className="discover__description">26 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover10.png" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Denizli</h2>
                            <span className="discover__description">8 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover11.png" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Diyerbakır</h2>
                            <span className="discover__description">11 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover12.png" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Bursa</h2>
                            <span className="discover__description">13 tours available</span>
                        </div>
                    </div>
                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover13.png" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Konya</h2>
                            <span className="discover__description">15 tours available</span>
                        </div>
                    </div>

                    <div className="discover__card swiper-slide">
                        <img src="http://localhost:3000/assets/img/discover8.jpg" alt="" className="discover__img" />
                        <div className="discover__data">
                            <h2 className="discover__title">Tekirdağ</h2>
                            <span className="discover__description">8 tours available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
  }


export default SectionThree;