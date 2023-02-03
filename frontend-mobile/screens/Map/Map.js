import * as React from 'react';
import { useState, useEffect } from 'react'
import MapView, { Circle,Marker,Icon } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import api from "../../api/api"


const Ohrid = {
  "PlaceName": "Ohrid",
  "lat": "41.11722",
  "lon": "20.80194",
  "latTwo": "41.125480",
  "lonTwo": "20.825708",
  "Range": "20km",
  "Lvl": 10,
  "Badge": "🐟"

    
  };

  const LatLon = {
    latitude: 41.11722,
    longitude: 20.80194,
};

  

 function Map(props) {

  const postLat = props.route.params.postLat;
  const postLon = props.route.params.postLon;



  const [places, setPlaces] = useState([]);


  async function getPlaces() {
    const response = await api.get(`/getPlaces`)

    setPlaces(response)
  
  }

  useEffect(() => {
    getPlaces()
  }, [])
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >

      {
        places.length!=0 && places.map(place => {


          return (
          <View key={(parseFloat(place.lat) + parseFloat(place.lon) * parseFloat(place.lat) + Math.random()).toString()}>
              <Marker  coordinate={{latitude: parseFloat(place.lat), longitude: parseFloat(place.lon)}}>
                <Text style={styles.bagde}>{place.Badge}</Text>
              </Marker>


              <Circle
                center = {{latitude: parseFloat(place.lat), longitude: parseFloat(place.lon)}}
                radius = { parseInt(place.Range) }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }
              
               />

               
          </View>
          )

        })
      }



            <Marker  coordinate={{latitude: parseFloat(postLat), longitude: parseFloat(postLon)}}>
              </Marker>


    

      </MapView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bagde:{
    fontSize: 20,
  },
});

export default Map