import React, { useEffect, useState } from 'react';
import { View , ImageBackground, ScrollView} from 'react-native';
import notificationsBackground from '../../pictures/Notifications.png'
import NotificationBar from '../../components/notifications/NotificationBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'


import styles from './styles';

//     const response = await api.get(`/getStorys?page=${pageNum}`)

function Notifications (){
    const [notifications, setNotifications] = useState(false);

    async function getNotifications() {
      try{
        const user = JSON.parse(await AsyncStorage.getItem('jwt'))
        const userUUID = user.uuID

        console.log(`userUUID: ${userUUID} `)

        const response = await api.get(`/notifications?uuID=${userUUID}`)
        
        
        console.log("\n\n")
        console.log(response[0].Title)
        console.log("\n\n")

        setNotifications(response)

      } catch(e){
        console.log(`error: ${e}`)
      }
    }

    useEffect(() => {getNotifications()}, [])


    return (
      <View style={styles.container}>
       
        <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}} >
         
         <ScrollView style={styles.scrollViewStyle}>
            {
              notifications &&
              notifications.reverse().map((e, index) => <NotificationBar key={e.id} logo={e.userSentLogo} user={e.userSentUsername} Title={e.Title} />)
            }
         </ScrollView>

        </ImageBackground>
      </View>
    );
  
}

export default Notifications;