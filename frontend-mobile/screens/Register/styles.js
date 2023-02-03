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
      textShadowColor: 'rgba(0, 0, 0, 0.50)',
      textShadowOffset: {width: 2, height: 2},
       textShadowRadius: 5,
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      marginBottom :30,
    },
    inputField:{
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
        
    },

    buttonText:{
        color:"black",
        fontSize:18,
        textAlign: "center",
        lineHeight: 45,

    },
    
    checkbox: {
    flexDirection: 'row',
    },
    popup: {
      // position: 'absolute';
      // top: 0;
      // left: 0;

    }
  });

export default styles