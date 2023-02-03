import { Image, Text, View ,Button, ImageBackground, ScrollView, Pressable} from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles'
import posts from '../../db/homepage'
import ProfilePosts from '../profilePosts/ProfilePosts';
import api from '../../api/api'


function Profilebar({props,logo, profilename, UserUUID}) {

  const [pageNum, setPageNum] = useState(1)
  const [storys, setStorys] = useState([])
  const [badges, setBadges] = useState([])
  const [likes, setLikes] = useState([])
  const [userInfo, setUserInfo] = useState(false)

  const [refresh, setRefresh] = useState(false)

  const profilePosts= posts();

  async function getBadges() {
    const response = await api.get(`/getAllUserBadges?userUUID=${UserUUID}`)
    setBadges(response)
  }

  async function getStorys() {
  
    const response = await api.get(`/getUserStorys?userSentUUID=${UserUUID}&page=${pageNum}`)

    setStorys(prev => [...response.allStorys.reverse(), ...prev])
    const arrLikes = response.allStorys.map(e => e.Likes);
    setLikes(prev => [...arrLikes, ...prev ])


    // console.log(response.allStorys)

    setPageNum(prev => prev+1)
  
  }

  async function getUserIfno() {
    try{
      const response = await api.get(`/getProfile?uuID=${UserUUID}`)
      setUserInfo(response)
    }catch(e){
      console.log({error: e})
    }
    
  }

  useEffect(() => {getStorys()}, [refresh])

  useEffect(() => {
    getBadges()
    getUserIfno()
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.s}>

    <View>
      <Image source={{uri:logo}} style={styles.image}/>
      <Text style={styles.profileName}>{profilename}</Text>
      <Text style={styles.profilUsername}>{userInfo && userInfo['nickname']}</Text>
      <Text style={styles.profilUsername}>User Level: {userInfo && String(userInfo['userLevel'])}</Text>
      <Text style={styles.profilUsername}>{(userInfo && userInfo["bio"]!=null) ? userInfo['bio'] : 
      <Text style={styles.profilUsername}>User Doesn't have bio</Text>}</Text>
      <Text style={styles.profilUsername}>Badges:</Text>
      <ScrollView horizontal={true}>
      <View style={styles.profilUsername && styles.badgesContainer}>
        {(badges.length!=0) ? badges.map((e, index)=>{
          
          const badgeUri = `http://localhost:3001/badges/${e.Badge}.png`
          return <Image key={index} style={styles.profileBadges} source={{uri: badgeUri}} />
        } 
          ) : <Text style={styles.profilUsername}>No Badges Found</Text>
        }
      </View>

      </ScrollView>
    </View>

      
    <View style={styles.postContainer}>
   {/* <ScrollView > */}
   {storys && storys.map((e, index) => 
   
     <ProfilePosts 
     props={props}
      key={index} 
      PostUUID={e.PostUUID}
      postImage={e.PostImage} 
      postLikes={likes[index]} 
      postTitle={e.Title}
      postLat={e.lat} 
      postLon={e.lon}

    />
   
     )
     }
   {/* </ScrollView> */}
    </View>
    
    </ScrollView>

   </View>
  )
}

export default Profilebar