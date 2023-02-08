import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    height: "100%",
    width: windowWidth,
    alignItems: 'center',
    textAlign: 'center',
},

bg:{
  // flex: 1,
  height: 500,
  width: windowWidth,
  alignItems: "center",
  // justifyContent: "center",
  backgroundColor: "black",
  justifyContent: "center"

},

welcomeText: {
  color: "#fff",
  fontSize: 30,
  fontWeight: 'bold',
},
welcomeTextSmall:{
  color: "#fff",
  fontSize: 15,
  fontWeight: 'bold',
},
welcomeView:{
  marginRight: 40
},

about:{
  margin: 15
},
aboutHeader: {
  marginTop: 5,
  marginBottom: 15
},
aboutHeaderText: {
  color: "#11414B",
  fontSize: 24,
  fontWeight: "bold"
},
aboutParagraphText: {
  color: "#918B8B",
  fontSize: 16,
  fontWeight: "600"
}


  }
)

export default styles