import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Pressable ,ImageBackground} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Updates from 'expo-updates';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import notificationsBackground from '../../pictures/Notifications.png';
import * as Location from 'expo-location';
import styles from './styles';
import arePointsNear from './algorith';

const places = [
  {
      place: "Ohrid",
      lat: "41.11722",
      lon: "20.80194"
  },
  {
      place: "Skopje",
      lat: "41.9973462",
      lon: "21.4279956"
  }
]

function UploadPost(props) {

    const [image, setImage] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [uploadImage, setUploadImage] = React.useState('')

    const [userLocation, setUserLocation] = React.useState(null);

  
    const [errorName, setErrorName] = React.useState('')
    const [showError, setShowError] = React.useState(false)
    const [photo, setPhoto] = React.useState(null);
    const [photoShow, setPhotoShow] = React.useState(null);
    const [getPlaces, setGetPlaces] = React.useState(false)

    const [inRadius, setInRadius] = React.useState(false)

    const getLocation = async () => {
      try{
          
          let { coords } = await Location.getCurrentPositionAsync();
        
          setUserLocation(coords);
    
          console.log(coords);

          for(let i=0; i<=getPlaces.length-1; i++){
            const userLat = coords["latitude"];
            const userLon = coords["longitude"];

            const currentPlace = getPlaces[i]

            const userPlace = {lat: userLat, lng: userLon}
            const currentPlaceCoords = {lat: currentPlace.lat, lng: currentPlace.lon}
            const currentPlaceRadius = currentPlace.Range/1000; // divide meters to km

            const isInRadiusFn = arePointsNear(userPlace, currentPlaceCoords, currentPlaceRadius)

            if(isInRadiusFn){
              setInRadius(getPlaces[i])
            }
          }

      }catch(e){
          alert("please open your gps location")
      }
    }

    const getPermission = async () => {
      (async () => {
          try{
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                alert('Permission to access location was denied');
              }
                  
              console.log(status);
        
          }
          catch(e){
              console.log(e)
          }

  
      })();
    };

    const getMapPlaces = async () => {
      const response  = await api.get("/getPlaces")
      console.log(response)
      console.log(response.length)

      setGetPlaces([...response])
    }

    React.useEffect(() => {getPermission(); getMapPlaces()}, [])

    async function uploadFile() {
       await api.post(`/uploadFile`, image)
    }

    async function Submit() {
            
          const account = JSON.parse(await AsyncStorage.getItem('jwt'))

          // const OnePlace = places[Math.floor(Math.random() * places.length-1)]

            const OnePlace = places[0];
        
            const dataObj = {
                userSentUUID: account.uuID,
                userSentUsername: account.username,
                userSentUserImage: account.UserImage,
                Title: title,
                PostImage: photo.finalName,
                lat: OnePlace.lat,
                lon: OnePlace.lon,
            }

            uploadFile();

            const responseData = await api.post(`/createStory`, dataObj)
            Updates.reloadAsync()
            if(responseData.error){
              setErrorName(responseData.error)
              setShowError(true)
              return
            }    
              
    }

    const pickImage = async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
      });

      if (result.cancelled) {
          return;
      }

      let localUri = result.uri;
      setPhotoShow(localUri);
      let filename = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append('image', { uri: localUri, name: filename, type });

      await api.post('/uploadFile', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => {
          setPhoto(res);
          setUploadImage(`http://localhost:3001/${res.finalName}`);
          console.log(uploadImage);
          console.log(res);
      }).catch(err => {
          console.log(err.response);
      });
    }

      if(!uploadImage)
      {
        return(
          <View style={styles.container}>
          <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}}>

          <Pressable onPress={() => getLocation()}>
            <View>
              <Text>GET LOCATION</Text>
            </View>
          </Pressable>   

          <Entypo name="upload" size={50} color="black" onPress={pickImage} style={styles.cameraButton}/>
          <AntDesign style={styles.cameraButton} name="camera" size={50} color="black" onPress={() => props.navigation.navigate("TakePicture")}/>
          </ImageBackground>
          </View>
        )
      }else if(uploadImage)
      {
        return(
          <View style={styles.container} >
          <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}}>
           {uploadImage && <Image source={{ uri:uploadImage }} style={{ width: 300, height: 300 , borderRadius: 50,marginBottom: 30,}} /> }
           {uploadImage &&     <TextInput 
                 autoCorrect={false}
                 style={styles.inputField}
                 placeholder="Post Title"
                 placeholderTextColor={'white'}
                 autoCapitalize="none"
                 onChangeText={(text)=> setTitle(text)}
             />  }
             {uploadImage &&  <Button title='Send Data' onPress={Submit} />
             }
            </ImageBackground>
         </View>
        )
      }

}


// const styles = new StyleSheet.create({
//     container:{ flex: 1,
//        justifyContent: 'center',

//        },
       

//     inputField:{
//         textShadowColor: 'rgba(0, 0, 0, 0.70)',
//         textShadowOffset: {width: 2, height: 2},
//          textShadowRadius: 5,
//         width: 300,
//         height: 45,
//         borderBottomColor: "#224957",
//         borderBottomWidth: 2,
//         marginLeft: "auto",
//         marginRight: "auto",
//         borderRadius: 10,
//         alignSelf: 'center',
//         color: "white",
//         marginBottom: 50,
//         paddingLeft: 20,
        
//       },
//       cameraButton: {
//         marginBottom: 40,
//         alignSelf: 'center'
//       },  
      
//       image: {
//         flex:1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
  
// })

export default UploadPost;