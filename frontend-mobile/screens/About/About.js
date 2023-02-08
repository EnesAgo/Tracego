import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import styles from './styles';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function About (props) {

 
    return (
      <View style={styles.container}>

        <Text>About</Text>

       </View>

    )
  }



export default About


