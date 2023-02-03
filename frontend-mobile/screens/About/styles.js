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


commentButton:{
    alignSelf: 'center',
    width: 50,
}


  }
)

export default styles