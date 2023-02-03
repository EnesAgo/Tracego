import React, { useEffect, useState } from "react";
import { Pressable ,StyleSheet,View,Text} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../api/api'

const storeData = async (dataName, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(dataName, jsonValue)
  } catch (e) {
    console.log(`error: ${e}`)
  }
}

const LikeButtonBar = ({Likes, PostUUID}) => {
  const [liked, setLiked] = useState(false);

  const [postLike, setPostLike] = useState()


  useEffect(() => {

    // console.log("this is get likes")

    async function getIsLiked() {

      const user = JSON.parse(await AsyncStorage.getItem('jwt'))
      const UserUUID = user.uuID

      const accuuID = JSON.parse(await AsyncStorage.getItem(`posts-${PostUUID}`))

      const response = await api.get(`/getLike?userUUID=${UserUUID}&postUUID=${PostUUID}`)

      // console.log(response.isLiked)



      if(response.isLiked){
        setLiked(true)
      }
    }

    getIsLiked()
    // console.log(postLike)

  }, [])

  useEffect(() => {setPostLike(Likes)}, [Likes])


  async function likeFunc(){
    

    if(liked){

          try{

            const user = JSON.parse(await AsyncStorage.getItem('jwt'))
            const UserUUID = user.uuID

            const putObj = {
              "postUUID": PostUUID
            }
      
            const response = await api.put(`/unlikePost?userUUID=${UserUUID}`, putObj)
            
            // console.log(response)
      
            storeData(`posts-${PostUUID}`, false)

            setLiked(false)
            setPostLike(prev => prev-1)

          } catch(e){
            console.log(`error: ${e}`)
          }
      }

      else{

        try{
 
          const user = JSON.parse(await AsyncStorage.getItem('jwt'))
          const UserUUID = user.uuID

          const putObj = {
            "postUUID": PostUUID
          }

          const response = await api.put(`/likePost?userUUID=${UserUUID}`, putObj)

          console.log(response.updatedLikes)

          // console.log(`UserUUID = ${UserUUID}\n`)
          // console.log(`postUUID = ${PostUUID}\n`)

          if(response.error){
            console.log("error")
            return
          }

          storeData(`posts-${PostUUID}`, true)

          setLiked(true)
          setPostLike(prev => prev+1)
          // console.log(`likes: ${postLike}`)
          

        } catch(e){
          console.log(`error: ${e}`)
        }

      }
  }

  return (
  <View>
      <Pressable onPress={() => {likeFunc()}} style={styles.likeButton}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "blue" : "#fff"}
        style={styles.buttonShadow}
        
      />
      <Text style={styles.likeText}>{postLike}</Text>
    </Pressable>
    
  </View>
    
  );
};


const styles = StyleSheet.create({

  likeButton :{
    width:50,
    alignItems:"center",
    marginBottom:5,
    
  },
  buttonShadow:{
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 5,
  },

  likeText:{
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 5,
     color: "#fff",
     marginTop: 10,

    
  }
})


export default LikeButtonBar