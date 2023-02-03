import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import styles from './styles';
import * as Updates from 'expo-updates';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import { AntDesign } from '@expo/vector-icons';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function PlaceStroys(props) {

    const [refreshing, setRefreshing] = React.useState(false);
    const [pageNum, setPageNum] = useState(1)
    const [storys, setStorys] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [likes, setLikes] = useState([])
    const [commentPostUUID, setCommentPostUUID] = useState('')
    const [myPost, setMyPost] = useState("");
    

    const { PlaceName, 
      } = props.route.params;


      async function getStorys() {
  
        const response = await api.get(`/getPlaceStorys?place=${PlaceName}`)
    
         console.log(response)
    
        setStorys(prev => [...response.allStorys.reverse(), ...prev])

        const arrLikes = response.allStorys.map(e => e.Likes);
        setLikes(prev => [...arrLikes, ...prev])
    
        setPageNum(prev => prev+1)
      
      }
    
    
      const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => Updates.reloadAsync());
      }, []);
    
      useEffect(() => {getStorys();}, [refresh])
    
     

  return (
    <View style={styles.container}>
        <AntDesign style={styles.backButton} name="arrowleft" size={30} color="black" onPress={() => props.navigation.navigate('HomePage')} />
      <View style={styles.headerContainer} >
      <Image source={{ uri: `http://localhost:3001/badges/${PlaceName}.png`}} style={styles.headerImage}/>
      <Text style={styles.headerP}>{PlaceName}</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
         

         <ScrollView contentContainerStyle={styles.scrollView}>  
         
        {storys && 
         storys.map((e, index) => 
      
         <Pressable key={index} style={styles.barContainerHorizontal} onPress={()=> props.navigation.navigate("FullPost",{fullPostPic:e.PostImage,fullPostTitle: e.Title, username:e.CompanySentUsername,logo: e.CompanySentUserImage, PostUUID:e.PostUUID, postLikes: 0, postLat: 0, postLon: 0, commentPostUUID: e.CommentUUID})}>
         <View  style={[styles.container]}>
         <Image source={{uri: e.PostImage}}  resizeMode="cover" style={[styles.image]}  ></Image> 
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