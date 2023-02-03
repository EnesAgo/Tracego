import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import styles from './styles';
import * as Updates from 'expo-updates';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function MapPlaces({props}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [pageNum, setPageNum] = useState(1)
  const [storys, setStorys] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [likes, setLikes] = useState([])
  const [commentPostUUID, setCommentPostUUID] = useState('')
  const [myPost, setMyPost] = useState("");
  const [sponsors, setSponsors] = useState([])

    
  async function getSponsors() {
  
    const response = await api.get(`/getSponsors`)

    // console.log(response)

    setSponsors([...response.allSponsors])
  
  }

  
  async function getStorys() {
  
    const response = await api.get(`/getPlaces?page=${pageNum}`)

    // console.log(response.allStorys)

    setStorys(prev => [...response.reverse(), ...prev])
    const arrLikes = response.map(e => e.Likes);
    setLikes(prev => [...arrLikes, ...prev])

    setPageNum(prev => prev+1)
  
  }


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => Updates.reloadAsync());
  }, []);

  useEffect(() => {getStorys(); getSponsors();}, [refresh])



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

        
         
       <ScrollView contentContainerStyle={styles.scrollViewHorizontal} horizontal={true} showsHorizontalScrollIndicator={false}
> 
        {sponsors && 
         sponsors.map((e, index) => 
      
         <Pressable key={index} style={styles.barContainerHorizontal} onPress={()=> props.navigation.navigate("FullPost",{fullPostPic:e.PostImage,fullPostTitle: e.Title, username:e.CompanySentUsername,logo: e.CompanySentUserImage, PostUUID:e.PostUUID, postLikes: 0, postLat: 0, postLon: 0, commentPostUUID: e.CommentUUID})}>
         <View  style={[styles.container]}>
         <Image source={{uri:e.PostImage}}  resizeMode="cover" style={[styles.ScrollImage]}  ></Image> 
         <Text style={styles.p} >{e.userSentUsername}</Text>
         </View>
         </Pressable>
      
          )
          
         }
         </ScrollView>

         <ScrollView contentContainerStyle={styles.scrollView}>  
         
        {storys && 
         storys.map((e, index) => 
      
         <Pressable key={index} style={styles.barContainer} onPress={()=> props.navigation.navigate("PlaceStroys",{PlaceName:e.PlaceName})}>
         <View  style={[styles.container]}>
         <Image source={{ uri: `http://localhost:3001/badges/${e.PlaceName}.png`}}  resizeMode="cover" style={[styles.image]}  ></Image> 
         <Text style={styles.p} >{e.PlaceName}</Text>
         </View>
         </Pressable>
      
          )
          
         }
         </ScrollView>
         </ScrollView>

              

         </View>

  )
}