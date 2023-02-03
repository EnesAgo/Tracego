import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 


const LocationButton = (props) => {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => props.navigation.navigate("Map",{postLat: "41.99646", postLon:"21.43141"})}>
      
      <SimpleLineIcons
       name="location-pin" size={30} color="#fff" style={styles.buttonShadow}/>
    </Pressable>
  );
};

const styles =StyleSheet.create({

  locationButton :{
    width:50,
    alignItems:"center",
    marginBottom:15,
    
  },
  buttonShadow:{
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 5,
  },
})




export default LocationButton