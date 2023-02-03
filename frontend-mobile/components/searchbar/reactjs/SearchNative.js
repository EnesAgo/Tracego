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
    const [isSearch, setIsSearch] = useState(true)
    const [text,setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [profileData, setProfileData] = useState()
    const [refreshing, setRefreshing] = React.useState(false);

    const [suggestionUserUUID, setSuggestionUserUUID] = useState('');

    useEffect(() => console.log(`
    
    uuID: ${suggestionUserUUID}
    
    `), [suggestionUserUUID])

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => Updates.reloadAsync());
    }, []);

      async function getSuggestions(query){
            const response = await api.get(`/search?text=${query}`)
         
            setSuggestions(response)
        }

      async function getProfileData(uuID) {      
        const response = await api.get(`/getProfile?uuID=${uuID}`)
        setProfileData(response)

        if(response.error){
          // console.log(response.error)
          return
        }
        // console.log(response)


      }

      if(isSearch){
        
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
            <Pressable key={i} style={styles.leftRightContainer} 
              onPress={()=>{
                setIsSearch(false);
                getProfileData(suggestions.uuID)
                setSuggestionUserUUID(suggestions.uuID)
              }}
            >
                <Text style={styles.usernameText}>{suggestions.username}</Text>
                </Pressable>
                </View>
        </View>
        )}
    
         
        </>
      )
      }else {

             return (
              
               
              <View style={styles.container}>
                <ScrollView
                 contentContainerStyle={styles.scrollView}
                 refreshControl={
                   <RefreshControl
                     refreshing={refreshing}
                     onRefresh={onRefresh}
                   />
                 }
               >

                <AntDesign style={styles.backButton} name="arrowleft" size={30} color="white" onPress={() => setIsSearch(true)} />

                  
         
                 <View>
         
                     {
                       profileData ? <ProfileBar props={props} logo={profileData.UserImage}  profilename={profileData.username} UserUUID={suggestionUserUUID}  postLat={profileData.lat} 
                       postLon={profileData.lon}/> : <Text>Loading...</Text> 
                       
                     }     

                 </View>
                 </ScrollView>
               </View>
           
               
             )
         }
      


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
    
