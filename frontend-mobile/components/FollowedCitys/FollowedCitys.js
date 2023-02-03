import { View , ImageBackground,Image, Pressable,RefreshControl, ScrollView,Text} from 'react-native';
import React from 'react'
import styles from './styles';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'
import * as Updates from 'expo-updates';



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function FollowedCitys({props}) {
    const [refreshing, setRefreshing] = React.useState(false);
const [pageNum, setPageNum] = useState(1)
const [storys, setStorys] = useState([])
const [refresh, setRefresh] = useState(false)





async function getStorys() {
    const uuid = JSON.parse(await AsyncStorage.getItem('jwt')).uuID
    console.log("this is it "+ uuid);

    const response = await api.get(`/getFollowedPlaces?userUUID=${uuid}`)// --> /getFollowedPlaces?userUUID=${asud-asda-asd}

    console.log(response)

    setStorys(prev => [...response.reverse(), ...prev])
   

    setPageNum(prev => prev+1)
  
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => Updates.reloadAsync());
  }, []);

  useEffect(() => {getStorys()}, [refresh])


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
      <ScrollView contentContainerStyle={styles.scrollView}>  
         
         {storys && 
          storys.map((e, index) => 
    

    
   
          <Pressable key={index} style={styles.barContainer} onPress={()=> props.navigation.navigate("FullPost",{fullPostPic:e.PostImage,fullPostTitle: e.Title, username:e.userSentUsername,logo: e.userSentUserImage, PostUUID:e.PostUUID, postLat: e.lat, postLon: e.lon, commentPostUUID: e.CommentUUID})}>
          <View  style={[styles.container]}>
            <Image source={{ uri: `http://localhost:3001/badges/${e.PlaceUUID}.png`}} style={styles.image}/>
         <Text style={styles.p}>{e.PlaceUUID} </Text>
          <Text style={styles.p} >{e.userSentUsername}</Text>
          </View>
          </Pressable>
       
       
           )
           
          }
          </ScrollView>
          </ScrollView>
    </View>
  )
}