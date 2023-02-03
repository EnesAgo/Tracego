import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
      width:"100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      },
    image:{
      width:90,
      height:90,
      marginTop:30,
      alignSelf: 'center',
      borderRadius: 30,
    },
  
    profileName: {
      color: '#fff',
      fontSize:35,
      alignSelf: "center",
      marginTop: 15,
  
    },
  
    tabs:{
      width:"90%",
      borderTopColor : "#797979",
      borderTopWidth: 3,
      flexDirection:'row',
      justifyContent: "space-around",
      alignSelf: 'center',
      marginTop: 15,
    },

    leftP:{
        height: 45,
        lineHeight: 45,
        fontSize:25,
        color: "#fff",
        borderRightColor: "#797979",
        borderRightWidth: 3,
        alignSelf: 'center',
        textAlign: 'center',
        paddingBottom: 10,
        width: "100%",
      },

      leftPContainer: {
        width:"50%",
          
      },
  
    rightP:{
      height: 45,
      lineHeight: 45,
      fontSize:25, 
      alignSelf: 'center',
      color: "#fff",
      textAlign: 'center',
      paddingBottom: 10,
      width: "100%",
    },
  

    textColorGreen: {
        // height: 45,
        // width
        backgroundColor: "rgba(105, 255, 228, 0.50)",
        alignSelf: 'center',
    },

    // posts and challenges
    postContainer: {
        height: 'auto',
        alignItems: 'center',
        width: 340,
        backgroundColor: "rgba(105, 255, 228, 0.50)",
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15
    },

    profilUsername:{
      color: '#fff',
      fontSize:17,
      alignSelf: "center",
      marginTop: 5,
    },
    profileBadges:{
      width: 30,
      height:30,
    },
    badgesContainer: {
      marginVertical: 15,
      marginHorizontal: 20
    },

    

   
  
  })

export default styles