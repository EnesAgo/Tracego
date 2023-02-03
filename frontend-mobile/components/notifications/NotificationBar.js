import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'


function NotificationBar({ logo, user, Title }) {

        return( 
            <View style={styles.container}>
                <Image source={{uri: logo}} style={styles.logo}></Image>
                <Text style={styles.p}>{user}</Text>
                <Text style={styles.p}>{Title}</Text>
                
  
            </View>
        )
    
}
const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 69,
        backgroundColor: "rgba(79, 79, 79, .90)",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        alignSelf: 'center',
        marginVertical: 10,
      
    },
    p: {
        color: "#fff"
    },
    logo:{
        width:30,
        height:30,
        marginBottom:5,
    },
})

export default NotificationBar