import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import styles from './styles';

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


