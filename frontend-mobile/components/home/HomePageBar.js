
import { View, Text, StyleSheet, ImageBackground,Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import LikeButtonBar from '../likebutton/LikeButtonBar';
import LocationButton from '../locationbutton/LocationButton';
import StatusWrapper from '../StoryWrapper/StoryWrapper';



function HomePageBar({ postimage, postitle, logo, username, postLikes, PostUUID ,commentButton},{profile}) {
    const [contHeigth, setHeight] = useState(100);
    const [imgHeigth, setImageHeight] = useState(70);
    const [imgWidth, setImageWidth] = useState (70);
    const [visible, setVisible]= useState('none');
    const [id, setId] = useState ("visible")
    const [fullId,setFullId] = useState ("notVisible");
 

   
        return(
            <> 
            { id=="visible" &&
        <Pressable onPress={() => {
   setHeight(500)
   setImageHeight(500)
   setImageWidth(500)
   setVisible("block")
   setId("notVisible") 
   setFullId("visible")        
    }}>
        
            <View nativeID={id} style={[styles.container,{height: contHeigth}]}>
            <Image source={{uri: postimage}}  resizeMode="cover" style={[styles.image,{height: imgHeigth,width: imgWidth}]}  ></Image> 
            <Text style={styles.p} >{username}</Text>
            </View>
            
            </Pressable>

}

{ fullId=="visible" &&
       <View nativeID={fullId} style={[styles.container,{height: contHeigth}]}>
       <Image source={{uri: postimage}}  resizeMode="cover" style={[styles.image,{height: imgHeigth,width: imgWidth}]}  ></Image> 
       <Text style={styles.p} >{username}</Text>
       </View>
}
            </>

     
        )
    
}
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        width: 70,
        alignItems: 'center',
    },


   p: {
        color: "#fff",
        width: 70,
        
    },
    image: {  
       width : 70,
       
        backgroundColor: '#00000000',
        flexDirection:'row',
        borderRadius: 50,
        borderColor: '#1678ca',
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        
      },
      logo:{
        width:30,
        height:30,
        marginBottom:5,
        borderRadius: 15,
        backgroundColor: '#00000000',
    },


    commentButton:{
        alignSelf: 'center',
        width: 50,
    }

})

export default HomePageBar