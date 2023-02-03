import { Text, View, ImageBackground,RefreshControl,ScrollView } from 'react-native'
import React, {  useEffect, useState } from 'react'
import styles from './styles';
import notificationsBackground from '../../pictures/Notifications.png';
import ProfileBar from '../../components/profile/ProfileBar';
import profiledb from '../../db/profiledb'
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function Profile(props) {

 const [refreshing, setRefreshing] = React.useState(false);
  const [profileData, setProfileData] = useState(false)
  const [currenUserUUID,setCurrentUserUUID] = useState('')


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => Updates.reloadAsync()  );
  }, []);


  async function getdata() {
    const uuid = JSON.parse(await AsyncStorage.getItem('jwt')).uuID

    const response = await api.get(`/getProfile?uuID=${uuid}`)
    setProfileData(response)

    console.log(response)

  }

  useEffect(() => {

   async function doUseEffect() {
    getdata()
    setCurrentUserUUID(JSON.parse(await AsyncStorage.getItem('jwt')).uuID)
   }
   doUseEffect()

  }, [])

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
         

        <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}} >

            {
              profileData ? <ProfileBar props={props} logo={profileData.UserImage}  profilename={profileData.username} UserUUID={currenUserUUID} /> : <Text>Loading...</Text>
            }     
           
        </ImageBackground>
        </ScrollView>
      </View>
  
      
    )
}

export default Profile