import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView:{
  
    flexDirection: 'row',
    flexWrap: "wrap",
    backgroundColor: '#00000000',
    borderRadius: 50,
    width: "100%",
    alignItems: 'center',
  
  },

  scrollViewHorizontal:{
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0, 0.2)',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
    marginRight: 20
    
  },



  container:{
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

  ScrollImage:{
    width : 70,
    height: 70,
      backgroundColor: '#00000000',
      flexDirection:'row',
      borderRadius: 50,
      borderWidth: 3,
      marginLeft: 'auto',
      marginRight: 'auto',
    borderColor: 'orange',
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
}


  }
)

export default styles