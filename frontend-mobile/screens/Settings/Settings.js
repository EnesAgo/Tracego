import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text ,StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { ImageBackground } from 'react-native'
import notificationsBackground from '../../pictures/Notifications.png';

import api from '../../api/api'
import styles from './styles';
import ChangeProfilePic from '../../components/Settings/ChangeProfilePic/ChangeProfilePic';
import ChangePassword from '../../components/Settings/ChangePassword/ChangePassword';
import ChangeBio from '../../components/Settings/ChangeBio/ChangeBio';





function Settings(props) {

  const [profilePic, setProfilePic] = useState(true)
  const [profilePass, setProfilePass] = useState(false)
  const [profileBio, setProfileBio] = useState(false)


  const ChangePasswordNavigator = () =>{
    // props.navigation.navigate('ChangePassword')
    setProfilePass(true)
    setProfilePic(false)
    setProfileBio(false)
  }
  const ChangeProfilePicNavigator = () => {
    // props.navigation.navigate('ChangeProfilePic')
    setProfilePass(false)
    setProfilePic(true)
    setProfileBio(false)

  }
  const ChangeBioNavigator = () =>{
    // props.navigation.navigate('ChangePassword')
    setProfilePass(false)
    setProfilePic(false)
    setProfileBio(true)
  }
    
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}}>

        {
          profilePic ? 
          <ChangeProfilePic /> : <></>
        }
        {
           profilePass ? 
          <ChangePassword /> : <></>
        }
        {
           profileBio ? 
          <ChangeBio /> : <></>
        }

       <Pressable style={styles.optionButtons}  onPress={() => ChangeProfilePicNavigator()}>
          <Text style={styles.options}> Change Profile Picture </Text>
       </Pressable>

       <Pressable style={styles.optionButtons} onPress={() => ChangePasswordNavigator()}>
        <Text style={styles.options}> Change Password </Text>
        </Pressable>

        <Pressable style={styles.optionButtons} onPress={() => ChangeBioNavigator()}>
        <Text style={styles.options}> Change Bio </Text>
        </Pressable>

       
        

      </ImageBackground>
     
    </SafeAreaView>
  )
  
  }

export default Settings;