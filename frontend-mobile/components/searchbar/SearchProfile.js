import React from 'react'
import { StyleSheet, Text, View , ImageBackground,Image, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

class SearchProfile extends React.Component {
  constructor() {
      super();

  }
render () {
      return (
          <View style={styles.container}>
         <View style={styles.searchSuggestions}>
     <View style={styles.leftRightContainer} >
     <Image source={{uri:this.props.logo}} style={styles.logo}></Image>
            <Text style={styles.usernameText}>{this.props.username}</Text>
     </View>
            <View style={styles.leftRightContainer}>
            <Text style={styles.likeText}>{this.props.userlike}</Text>
            <AntDesign name="hearto" size={24} color="white" />
            </View>
            </View>
          </View>
      )
}
  }


  const styles = StyleSheet.create({
    container: {
    top: 0,
    marginBottom: 15,
      width:"100%",
     
    },

    searchSuggestions:{
      flexDirection: 'row',
      width: "80%",
      height:30,
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      borderBottomColor : "#797979",
      borderBottomWidth: 3,

    },

    leftRightContainer:{
      flexDirection: 'row',
      height: "100%",
    },

    usernameText: {
      color: "white",
      float: "left",
      marginRight:5,
      height:"100%",
    
    },
    likeText:{
      color:"white",
      marginRight:5,
      height:"100%",
    },
    logo:{
      width:30,
      height:30,
      marginBottom:5,
      marginRight:5,
      height:"100%",
  },
  likeButton:{
    height:"100%",
  }
  }
)

export default SearchProfile;