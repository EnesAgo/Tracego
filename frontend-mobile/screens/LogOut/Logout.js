import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';



export default function Logout(props) {
    const resetData = async () => {
        try {
          await AsyncStorage.clear()
          Updates.reloadAsync() 
        } catch (e) {
          console.log(`error: ${e}`)
        }
      }

      useEffect(() => {resetData()}, [])
  return (
    
    <SafeAreaView style={styles.container}>
      <Text>Logging Out</Text>
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