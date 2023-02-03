import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: "#215C66",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        alignItems: "center",
        zIndex: 10,
    },
    Logo: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff"
    },
    aiChallenge: {
        paddingHorizontal:20,
        width: "80%",
        paddingTop:20,
        height: 300,
        backgroundColor: "rgb(33, 92, 102);",
        position: 'absolute',
        top:0,
        right:0,
        borderLeftColor:"#797979",
        borderBottomColor:"#797979",
        borderLeftWidth: 3,
        borderBottomWidth: 3,

      },
      aiChallengeOpen: {
        display: 'none',
      },
      

      menuContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        height: 50,
      },
      headerText:{
        color:"white",
        fontSize: 25,
      },
      menuRoots:{
        justifyContent: 'flex-start'
      },
      menuText:{
        color:"white",
        fontSize: 20,
        borderBottomColor : "#797979",
        borderBottomWidth: 3,
        width:"50%",
        lineHeight: 40,
      }
  }
)

export default styles
