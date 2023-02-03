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
    paragraphText:{
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      marginBottom: 30,
    },
    createAccount: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingTop: 20,
      borderTopColor: "white",
      borderTopWidth: 1,
      marginHorizontal: 25

    },
    inputField:{
      textShadowColor: 'rgba(0, 0, 0, 0.50)',
      textShadowOffset: {width: 2, height: 2},
       textShadowRadius: 5,
      width: 300,
      height: 45,
      backgroundColor: "#224957",
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