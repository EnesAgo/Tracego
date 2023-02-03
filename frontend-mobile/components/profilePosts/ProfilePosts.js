import { View, Text,Image,Pressable } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import styles from './styles'
import LocationButton from '../locationbutton/LocationButton'
import LikeButtonBar from '../likebutton/LikeButtonBar'
import { SimpleLineIcons } from '@expo/vector-icons'; 

function ProfilePosts ({props,PostUUID, postImage, postLikes, postTitle, postLat, postLon})  {
  
  // console.log(props)

  return (
   <View style={styles.container}>
  <View >
  <ImageBackground style={styles.image} resizeMode="cover" source={{uri: postImage}}>
    <View style={styles.postinfo}>
    <Text style={styles.profileName}>{postTitle}</Text>
    </View>
    <View style={styles.postinfo}>
    <View style={styles.postButton}>
    {/* <LocationButton props={props} /> */}

      <Pressable onPress={() => props.navigation.navigate("Map",{postLat: postLat, postLon: postLon})}>
        
          <SimpleLineIcons name="location-pin" size={30} color="#fff" style={styles.buttonShadow}/>

      </Pressable>
                   
    <LikeButtonBar Likes={postLikes} CommentPostUUID={PostUUID} PostUUID={PostUUID} />
      {/* <Text style={styles.postInfoText} >{postLikes}</Text> */}
    </View>
    </View>
    
   

   </ImageBackground>
  </View>
   </View>
  )
}

export default ProfilePosts