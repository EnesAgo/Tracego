import * as React from 'react';
import { useState, useEffect } from 'react'
import MapView, { Circle,Marker,Icon } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';  

 function Map(props) {

  const places = [
    {
        placeName: "Istanbul",
        lat: 41.015137,
        lon: 28.979530
    },
    {
        placeName: "Antalya",
        lat: 36.896893,
        lon: 30.713324
    },
    {
        placeName: "Izmir",
        lat: 38.423733,
        lon: 27.142826
    },
    {
        placeName: "Trabzon",
        lat: 41.002071,
        lon: 39.719219
    },
    {
        placeName: "Çanakkale",
        lat: 40.151550,
        lon: 26.405689
    },
    {
        placeName: "Bodrum",
        lat: 37.034409,
        lon: 27.430540
    },
    {
        placeName: "Yalova",
        lat: 40.657742, 
        lon: 29.276524
    },
    {
        placeName: "Kapadokya",
        lat: 38.658928, 
        lon: 34.853034
    },
    {
        placeName: "Mersin",
        lat: 36.794698,
        lon: 34.616297
    },
]
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >

      {
        places.length!=0 && places.map(place => {


          return (
          <View key={(parseFloat(place.lat) + parseFloat(place.lon) * parseFloat(place.lat) + Math.random()).toString()}>
              <Marker  coordinate={{latitude: parseFloat(place.lat), longitude: parseFloat(place.lon)}}></Marker>
               
          </View>
          )

        })
      }

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