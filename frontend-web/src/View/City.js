import React from 'react'
import { useParams } from 'react-router-dom';
import '../assets/css/city.css'
import CityFooter from '../components/city/CityFooter';
import CityHeader from '../components/city/CityHeader';
import CityMain from '../components/city/CityMain';

function City() {

    const { cityName } = useParams()

      return (
          <>
            <CityHeader placeName={cityName} />
            <CityMain placeName={cityName} />
            <CityFooter />
          </>
      )
  }


export default City;