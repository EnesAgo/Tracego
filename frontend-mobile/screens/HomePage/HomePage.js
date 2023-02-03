import { View,Text,RefreshControl, Pressable,Image } from 'react-native';
import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import styles from './styles';
import * as Updates from 'expo-updates';
import { useEffect,useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'
import MapPlaces from '../../components/MapPlaces/MapPlaces';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomePage (props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [pageNum, setPageNum] = useState(1)
  const [storys, setStorys] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [likes, setLikes] = useState([])
  const [commentPostUUID, setCommentPostUUID] = useState('')
  const [myPost, setMyPost] = useState("");
  const [sponsors, setSponsors] = useState([])



 
    return (
      <View style={styles.container}>

          <MapPlaces props={props} />
         </View>

    )
  }



export default HomePage


