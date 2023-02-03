import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View, TextInput,ScrollView, Text,Image} from "react-native";
import { Card } from 'react-native-paper';
import api from '../../api/api'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CommentSection({commentPostUUID,closeComments}) {
  const [pageNum, setPageNum] = useState(1)
  const [storys, setStorys] = useState([])
  const [refresh, setRefresh] = useState(false)

  const [comment, setComment] = useState('')

  const staticUUID = 'b4080a1a-2ca3-4f4b-9192-bfcadf3f95f6'

  
  async function getComments() {
  
    // const response = await api.get(`/getComments?PostUUID=${postUUID}&page=${pageNum}`)
    const response = await api.get(`/getComments?PostUUID=${commentPostUUID}&page=${pageNum}`)

    console.log(response)

    setStorys(prev => [ ...response.allComments.reverse(), ...prev])
    setPageNum(prev => prev+1)

    console.log("\n get comments \n")
  
  }

  useEffect(() => {getComments(); console.log(refresh)}, [refresh])

  async function postComment() {

    try{
      const account = JSON.parse(await AsyncStorage.getItem('jwt'))
    
        const dataObj = {
            PostUUID: commentPostUUID,
            userSentUUID: account.uuID,
            userSentUsername: account.username,
            userSentUserImage: account.UserImage,
            Title: comment
        }
        // console.log(dataObj)
  
        const responseData = await api.post(`/createComment`, dataObj)
   
  
        if(responseData.error){
            console.log(responseData.error)
          return
        }   
    }
    catch(e){
      console.log(`error: ${e}`)
    }
 
    setComment("")  

    setPageNum(1)
    setStorys([])
    setRefresh(prev => !prev)
    // await getComments()

  }



    return (
        <View style={styles.commentBoxContainer}>
      <View style={styles.titleClose}>
      <Text style={styles.commentsHeader}>Comments</Text>
           <Text style={styles.closeButton}>{closeComments}</Text> 
      </View>

     
                
       <ScrollView> 
        {storys &&
         storys.map((e, index) => 
          <View key={index} style={styles.parentContainer}>
              <View style={styles.container}>
                <View style={styles.userImageName}>
                  <Image source={{uri:e.userSentUserImage}} style={styles.image} />
                  <Text>{e.userSentUsername}: </Text>
                </View>
                <Text style={styles.comment}>{e.Title}</Text>
                </View>
          </View>

          )
         }
         </ScrollView>
        

        <TextInput 
          value={comment}
          autoCorrect={false}
          style={styles.inputField}
          placeholder={"Enter a comment"}
          placeholderTextColor={'black'}
          autoCapitalize="none"
          onChangeText={(text)=> setComment(text)}
        />
        <Ionicons name="send" size={24} color="black" style={styles.buttonPlace} onPress={() => {postComment()}} />
          </View> 
      )
  }

  
const styles = StyleSheet.create({
    commentBoxContainer:
    {
      position: 'absolute',
      bottom: 0,
      height: 300,
      width:"100%",
      backgroundColor: "#fff",
      borderTopLeftRadius: 15,
      borderTopRightRadius:15,
      alignItems: 'center',
      borderTopWidth: 2.5,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: "gray",
    
    },

    userImageName: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 25,

    },
    image:{
      width: 30,
      height: 30,
      borderRadius: 50,
      marginRight: 5,
    },

    commentsHeader:{
      paddingVertical: 10,
    },
    parentContainer: {
      width: "100%",
    },
    container:{
      minHeight: 45,
      maxHeight: 100,
      flexDirection:'row',
      justifyContent: 'space-between',
      width: "79%",
      lineHeight: 30,
      alignItems: 'center',
      backgroundColor: "#fff",
      alignSelf: 'center',
      borderRadius: 0,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.3)",
      marginBottom: 5,
    },
    inputField:{
       
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        width: "95%",
        height: 45,
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        outlineColor: "#523009",
        outlineStyle: "solid",
        outlineWidth: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        padding: 15,
        color: "black",
        position:'absolute',
        bottom: 0,
        
      },

      comment:{
        width: "50%",
      },

      buttonPlace:{
          position: 'absolute',
          right: 15,
          bottom: 7,
      },
      titleClose:{
        flexDirection:'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',

      },
      closeButton:
      {
       position: 'absolute',
       right:10,
      },
})

export default CommentSection;