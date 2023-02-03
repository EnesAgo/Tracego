import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView:{
  
    flexDirection: 'row',
    flexWrap: "wrap",
    backgroundColor: '#00000000',
    borderRadius: 50,
    width: "100%",
    alignItems: 'center',
    alignSelf: 'center',
  
  },



  mainContainer:{
      backgroundColor: '#00000000',
      alignItems: 'center',

  },

  barContainer:{
    width: "25%",
    alignItems: 'center',
    textAlign: 'center',

  },

  barContainerHorizontal:{
    marginRight: 10,
  },



  container:{
    marginTop: 20,
    width: "100%",
    alignItems: 'center',
    textAlign: 'center',
},


p: {
    color: "black",
  
   
},
image: {  
   width : 70,
  height: 70,
    backgroundColor: '#00000000',
    flexDirection:'row',
    borderRadius: 50,
    borderColor: '#1678ca',
    borderWidth: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  logo:{
    width:30,
    height:30,
    marginBottom:5,
    borderRadius: 15,
    backgroundColor: '#00000000',
},


commentButton:{
    alignSelf: 'center',
    width: 50,
},

headerContainer:{
  flexDirection:'row',
  alignItems: 'center',
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
width: "90%",
marginHorizontal:"10%",
paddingLeft: 35,
paddingBottom: 10,

},
backButton:{
  alignSelf: 'flex-start',
  position: 'absolute',
  top: 50,
  left: 15,
  zIndex: 100,
},

headerImage:{ 
  width : 90,
  height: 90,
    backgroundColor: '#00000000',
    flexDirection:'row',
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 3,
 
  marginTop: 20,
},


headerP:{
  fontSize: 40,
  textAlign: "center",
  lineHeight: 105,
  height: 90,  
  marginLeft: 20,
}




  }
)

export default styles