import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: 2, height: 2},
       textShadowRadius: 5,
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center", 
    }, 
    bioContainer: {
        flex: 1,
        padding: 15
    },
    inputField:{
      textShadowColor: 'rgba(0, 0, 0, 0.50)',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      width: 300,
      height: 305,
      backgroundColor: "#11b8f4",
      borderWidth: 1,
      borderColor: "#1146f4",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 10,
      marginBottom: 15,
      padding: 10,
      color: "white",
      
    },

    buttonStyle: {
        backgroundColor: "white",
        width: 300,
        height: 45,
        borderWidth: .5,
        borderColor: "#000",
        borderRadius:10,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom :250,

        
    },

    buttonText:{
        color:"black",
        fontSize:18,
        textAlign: "center",
        lineHeight: 45,
        

    },


    
   
  });

export default styles