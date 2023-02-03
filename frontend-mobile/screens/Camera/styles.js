import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{ flex: 1,
    justifyContent: 'center',

    },
    

 inputField:{
     textShadowColor: 'rgba(0, 0, 0, 0.70)',
     textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
     width: 300,
     height: 45,
     borderBottomColor: "#224957",
     borderBottomWidth: 2,
     marginLeft: "auto",
     marginRight: "auto",
     borderRadius: 10,
     alignSelf: 'center',
     color: "white",
     marginBottom: 50,
     paddingLeft: 20,
     
   },
   cameraButton: {
     marginBottom: 40,
     alignSelf: 'center'
   },  
   
   image: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
   },

   
  });

export default styles