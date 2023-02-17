import React from 'react'
import '../../styles/style.css'
import Card from '../home/Card'

function SectionSix() {
    const places = [
        {
            placeName: "Istanbul",
            img: "place1.png",
            price: "€143",
            stars: "4,6"
        },
        {
            placeName: "Antalya",
            img: "place2.png",
            price: "€130",
            stars: "5,0"
        },
        {
            placeName: "Izmir",
            img: "place3.png",
            price: "€100",
            stars: "4,7"
        },
        {
            placeName: "Trabzon",
            img: "place4.png",
            price: "€75",
            stars: "4,8"
        },
        {
            placeName: "Çanakkale",
            img: "place5.png",
            price: "€93",
            stars: "4,3"
        },
        {
            placeName: "Bodrum",
            img: "place6.png",
            price: "€175",
            stars: "5,0"
        },
        {
            placeName: "Yalova",
            img: "place7.png",
            price: "€137",
            stars: "4,3"
        },
        {
            placeName: "Kapadokya",
            img: "place8.png",
            price: "€97",
            stars: "5,0"
        },
        {
            placeName: "Mersin",
            img: "place9.png",
            price: "€117",
            stars: "4,5"
        },
    ]


      return (
        <section className="place section" id="place">
        <h2 className="section__title">Choose Your Place</h2>

            <div className="place__container container grid">

            {
                places && places.map(e => (
                    <Card key={`${e.img}-${e.placeName}`} img={e.img} rating={e.stars} title={e.placeName} subtitle={"Turkey"} price={e.price} route={e.placeName.toLocaleLowerCase()} />
                ))
            }

            </div>

        </section>
      )
  }


export default SectionSix;

