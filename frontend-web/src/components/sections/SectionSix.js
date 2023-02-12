import React from 'react'
import '../../styles/style.css'
import Card from '../Card';

function SectionSix() {
    const places = [
        {
            placeName: "İstanbul",
            img: "place1.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Antalya",
            img: "place2.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Izmir",
            img: "place3.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Trabzon",
            img: "place4.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Çanakkale",
            img: "place5.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Bodrum",
            img: "place6.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Yalova",
            img: "place7.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Kapadokya",
            img: "place8.png",
            price: "€75",
            stars: "5,2"
        },
        {
            placeName: "Mersin",
            img: "place9.png",
            price: "€75",
            stars: "5,2"
        },
    ]


      return (
        <section className="place section" id="place">
        <h2 className="section__title">Choose Your Place</h2>

            <div className="place__container container grid">

            {
                places && places.map(e => (
                    <Card img={e.img} rating={e.stars} title={e.placeName} subtitle={"Turkey"} price={e.price} route={"#"} />
                ))
            }

            </div>

        </section>
      )
  }


export default SectionSix;

