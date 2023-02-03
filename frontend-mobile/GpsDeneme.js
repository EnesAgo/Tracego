import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import * as Location from 'expo-location';



function GpsDeneme() {

    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);

    const getPermission = () => {
        (async () => {
            try{
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                  alert('Permission to access location was denied');
                }
                    
                console.log(status);
          
            }
            catch(e){
                console.log(e)
            }

    
        })();
      };

      async function getLocation() {
        try{
            
            let { coords } = await Location.getCurrentPositionAsync();
          
            setLocation(coords);
      
            console.log(coords);

        }catch(e){
            alert("please open your gps location")
        }
      }

      useEffect(() => {
        getPermission()
      }, [])

      return (
        <SafeAreaView>
            <Text>hello</Text>
            <Pressable>
                <Text onPress={() => getLocation()}>click</Text>
            </Pressable>
        </SafeAreaView>
      )
  }


export default GpsDeneme;