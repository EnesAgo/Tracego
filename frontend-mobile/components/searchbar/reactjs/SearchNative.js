import api from '../../../api/api'
import React, { useEffect, useState } from 'react'
import {View, Text, TextInput, Pressable,StyleSheet, ScrollView, RefreshControl, ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import * as Updates from 'expo-updates';


export default function SearchBarNative({props}) {

  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState(false)

  function searchStringInArray (str, strArray) {
    let returnArr = [];
    strArray.forEach(e => {
      // console.log(String(e.placeName).toLowerCase().match(str))
      var contained = (String(e.placeName).toLowerCase().indexOf(str.toLowerCase()) != -1);
      if(contained){
        returnArr.push(e)
      }
    })

    return returnArr;
  }

  const places = [
    {
        placeName: "Istanbul",
        picture: require("./images/place1.png"),
        price: "€143",
        stars: "4,6"
    },
    {
        placeName: "Antalya",
        picture: require("./images/place2.png"),
        price: "€130",
        stars: "5,0"
    },
    {
        placeName: "Izmir",
        picture: require("./images/place3.png"),
        price: "€100",
        stars: "4,7"
    },
    {
        placeName: "Trabzon",
        picture: require("./images/place4.png"),
        price: "€75",
        stars: "4,8"
    },
    {
        placeName: "Çanakkale",
        picture: require("./images/place5.png"),
        price: "€93",
        stars: "4,3"
    },
    {
        placeName: "Bodrum",
        picture: require("./images/place6.png"),
        price: "€175",
        stars: "5,0"
    },
    {
        placeName: "Yalova",
        picture: require("./images/place7.png"),
        price: "€137",
        stars: "4,3"
    },
    {
        placeName: "Kapadokya",
        picture: require("./images/place8.png"),
        price: "€97",
        stars: "5,0"
    },
    {
        placeName: "Mersin",
        picture: require("./images/place9.png"),
        price: "€117",
        stars: "4,5"
    },
]

  function getSuggestions(text) {
    setSuggestions(searchStringInArray(text, places))
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
                <Text style={styles.usernameText}>{suggestions.placeName}</Text>
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
        marginTop: 15,
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
    
