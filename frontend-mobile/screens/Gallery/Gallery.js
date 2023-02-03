import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import styles from './styles';
import * as Updates from 'expo-updates';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'
import MapPlaces from '../../components/MapPlaces/MapPlaces';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function Gallery (props) {

 
    return (
      <View style={styles.container}>

        <Text>Gallery</Text>

       </View>

    )
  }



export default Gallery


