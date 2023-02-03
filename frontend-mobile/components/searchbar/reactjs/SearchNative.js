import api from '../../../api/api'
import React, { useEffect, useState } from 'react'
import {View, Text, TextInput, Pressable,StyleSheet, ScrollView, RefreshControl, ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import notificationsBackground from '../../../pictures/Notifications.png';
import ProfileBar from '../../profile/ProfileBar';
import * as Updates from 'expo-updates';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function SearchBarNative({props}) {

  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState(false)

  function getSuggestions(text) {
    console.log(text)
  }

  return (

    <>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
    
            <TextInput onChange={()=> getSuggestions(text)} autoCorrect={false} onChangeText={e=>setText(e)} style={styles.inputField}  placeholder='Search...' autoCapitalize="none" placeholderTextColor={'#fff'} />
            
         
              <AntDesign style={styles.searchIcon} name="search1" size={20} color="#fff"  />
           
    
        </View>
    </View>
    
    
        {suggestions && suggestions.map ((suggestions,i) =>
        <View key={i} style={styles.suggestionsContainer}>
            <View style={styles.searchSuggestions}>
              <Pressable key={i} style={styles.leftRightContainer} >
                <Text style={styles.usernameText}>{suggestions.username}</Text>
              </Pressable>
            </View>
        </View>
        )}
    
         
        </>
      )

      


    }

    const styles = StyleSheet.create({
      container:{
          width: "100%",
          marginBottom:10,
          justifyContent: "flex-start",
          marginBottom: 10
      },
      searchSuggestions:{
        flexDirection: 'row',
        width: "80%",
        height:30,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderBottomColor : "#797979",
        borderBottomWidth: 3,
    
      },
    
    
      suggestionsContainer:{
        top: 0,
        marginBottom: 15,
          width:"100%",
      },
    
      inputContainer:{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf:"center",
          width: "80%",
          borderBottomColor : "#797979",
          borderBottomWidth: 3,
          
      },
      leftRightContainer:{
        flexDirection: 'row',
        height: "100%",
      },
    
    
      inputField:{
          backgroundColor: "none",
          marginTop:10,
          width: "100%",
          outlineStyle:"none",
          color: "#fff",
          height: 30,
          
      },
    
      searchIcon: {
          marginRight: 10,
      },
      usernameText: {
          color: "white",
          
      },
      likeText:{
          color: "White",
      }, 
       usernameText: {
        color: "white",
        float: "left",
        marginRight:5,
        height:"100%",
      
      },
      backButton:{
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 25,
        left: 20,
        zIndex: 100,
    },
    
    })
    
