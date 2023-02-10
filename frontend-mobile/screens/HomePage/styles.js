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
  height: 500,
  width: windowWidth,
  alignItems: "center",
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
  margin: 15,
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
},

reservePLanButton:{
  width: 175,
  height: 75,
  marginVertical: 20,
  backgroundColor: "rgb(33, 45, 65)",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center"
},
reservePLanButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
  textAlign: "center",
  height: 75,
  lineHeight: 75,
},

aboutPicHolder: {
  width: "100%",
  alignItems: "center",
  marginVertical: 40
},
aboutPic: {
  width: windowWidth-100,
  height: 400,
  alignItems: "center",
  backgroundColor: "black",
  justifyContent: "center"
},



choosePlace: {
  width: "100%",
  alignItems: "center"
},
placeText: {
  color: "#11414B",
  fontSize: 28,
  fontWeight: "bold"
},


  }
)

export default styles