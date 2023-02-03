
import { View, Text, StyleSheet, ImageBackground,Image,Pressable} from 'react-native';
import React, { useState } from 'react';
import LikeButtonBar from '../../components/likebutton/LikeButtonBar';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import CommentSection from '../../components/Comment/CommentSection';
import { FontAwesome } from '@expo/vector-icons';



function FullPost(props) {

const { fullPostPic, 
        fullPostTitle, 
        logo, 
        username, 
        postLikes, 
        PostUUID, 
        commentButton,
        postLat,
        postLon,
        commentPostUUID,
      } = props.route.params;
      const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)

      console.log(`commentPostUUID: ${commentPostUUID}`)

      console.log("this is it" + fullPostPic)
        return(
            <>
            <View  style={styles.container}>
                <ImageBackground source={{uri: fullPostPic}} resizeMode="contain" style={styles.image}>
                  <View style={styles.leftContainer}>
                    <View style={styles.leftView}>
                        <View style={styles.leftViewContainer}>
                    <AntDesign style={styles.backButton} name="arrowleft" size={30} color="white" onPress={() => props.navigation.navigate('HomePage')} />
                    <View style={styles.userData}>                 
                    <Image source={{uri: logo}}  style={styles.logo} /> 
                        <Text style={styles.pUsername}>{username}</Text>
                        </View>
                       
                            <Text style={styles.p}>{fullPostTitle}</Text>
                        </View>
                    </View>
                  </View> 
                  <View style={styles.rightContainer}>
                  <Pressable onPress={() => props.navigation.navigate("Map",{postLat: postLat, postLon: postLon})}>
      
                    <SimpleLineIcons
                         name="location-pin" size={30} color="#fff" style={styles.buttonShadow}/>
                     </Pressable>
                    
                     <FontAwesome style={styles.buttonShadow} name="comments-o" size={24} color="white"  onPress={()=> setIsCommentBoxOpen(true)}  />
                     
                    <LikeButtonBar Likes={postLikes} CommentPostUUID={PostUUID} PostUUID={PostUUID} />
                    <Text style={styles.commentButton}>  {commentButton}</Text>

                  </View>
                 
                  {
                    isCommentBoxOpen && <CommentSection commentPostUUID={commentPostUUID} closeComments= {<AntDesign name="closecircle" size={24}  color="black" onPress={()=> setIsCommentBoxOpen(false)} /> } />
                }
                          
                </ImageBackground>

            </View>
     
      
            
            </>
        )
    
}

const styles = StyleSheet.create({
    container:{
flex:1,
width:"100%",
height: "100%",
marginBottom:5,
    },
    p: {
        color: "#fff",
        
    },
    pUsername: {
        color: "#fff",
        height: 30,
        marginLeft: 10,
    },
    image: {
        flex: 1,
        width: "100%",
        height:"100%",
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor: "gray",
        

      },
      logo:{
        width:30,
        height:30,
        marginBottom:5,
        borderRadius: 15,
    },
    backButton:{
        marginBottom: 30,
    },

   
    userData:{
        justifyContent: 'center',
        width: 100,
        height: 100,
        
    },  
   

    leftContainer:{
        
        paddingLeft: 20,
        paddingTop: 40,
        width:"85%",
        flexDirection:'column',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        paddingBottom: 50,
    },

    userData:{
        flexDirection:'row',
        alignItems:'center',
    },

    rightContainer:{
       
        width: "15%",
        flexDirection: 'column',
        justifyContent:'flex-end',
        paddingVertical: 10,
        
    },

    p:
    {
        color: "#fff",
        fontSize: 18,
        marginLeft: 5, 
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 5,
    },

    leftView:{
        flexDirection: "column",
        justifyContent: 'space-between',
        height:"100%",
    },
    commentButton:{
        alignSelf: 'center',
        width: 50,
    },
    locationButton :{
        width:50,
        alignItems:"center",
        marginBottom:15,
        
      },
      buttonShadow:{
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 2, height: 2},
         textShadowRadius: 5,
         marginBottom: 10,
         marginLeft: 10,
      },

})

export default FullPost