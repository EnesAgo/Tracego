import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Logout(props) {

    const NavigateToApp = React.useCallback(() => {
        wait(1500).then(() => props.navigation.navigate("Main"));
      }, []);



      useEffect(() => {NavigateToApp()}, [])
  return (
    
    <SafeAreaView style={styles.container}>
      <Text>TRACEGO</Text>
    </SafeAreaView>
  )
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
})