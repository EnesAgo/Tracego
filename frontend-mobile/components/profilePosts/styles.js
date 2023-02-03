import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:"100%",
      flexDirection: "column",
      alignItems: "center",
      marginBottom:10,
      borderRadius: 30,
      overflow: 'hidden',
      marginTop: 10,
     
},

radius:{
  borderRadius: 30,
  backgroundColor: "black",
},
image:{
    width:300,
    height:200,
    alignSelf: 'center',
    flexDirection:"row",
    justifyContent:"space-between",
    

  },
  profileName: {
    color: '#fff',
    fontSize:15,
    alignSelf: "center",
    marginTop: 15,


  },
  postinfo: {
    height: "100%",
    width:"50%",
    flexDirection: "column",
    justifyContent: 'flex-end',
    paddingBottom: 10,
   
  },

  postButton: {
    paddingLeft: 85,
  },
  postInfoText: {
    color:"white",
    fontSize: 15,
    textAlign: "right",
    paddingRight: 30,
  },
  buttonShadow:{
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 2, height: 2},
     textShadowRadius: 5,
     marginBottom: 10,
     marginLeft: 10,
  },
  })

export default styles