import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image,TextInput, ImageBackground } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import api from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function PostCamera(props) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [photoShow, setPhotoShow] = React.useState(null);
  
  
  const [errorName, setErrorName] = useState('')
    const [showError, setShowError] = useState(false)

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


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  // let takePic = async () => {
  //   let options = {
  //     quality: 1,
  //     exif: false
  //   };

  //   let newPhoto = await cameraRef.current.takePictureAsync(options);
  //   setPhoto(newPhoto);
  //   setImage(newPhoto);

  // };

        
  const takePic = async () => {

    let result = await cameraRef.current.takePictureAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
    });

    if (result.cancelled) {
        return;
    }

    let localUri = result.uri;
    setPhotoShow(localUri);
    setImage(result.uri);
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    formData.append('image', { uri: localUri, name: filename, type });

    await api.post('/uploadFile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    }).then(res => {
        setPhoto(res);
        
       
    }).catch(err => {
        console.log(err.response);
    });
}

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };



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
  
          const responseData = await api.post(`/createStory`, dataObj)
     
    
          if(responseData.error){
            setErrorName(responseData.error)
            setShowError(true)
            return
          }    
            
        }

    return (
      <SafeAreaView style={styles.container}>
      
        <ImageBackground style={styles.preview} source={{ uri: image}} >
    <View style={styles.optionButtons}>
    {hasMediaLibraryPermission ? <Entypo style={{marginRight: 25,}} name="save" size={30} color="white" onPress={savePhoto} />: undefined}
        <MaterialIcons name="delete" size={30} color="white"  onPress={() => setPhoto(undefined)} />
    </View>
          
        </ImageBackground>
        <TextInput 
                autoCorrect={false}
                style={styles.inputField}
                placeholder="Post Title"
                placeholderTextColor={'gray'}
                autoCapitalize="none"
                onChangeText={(text)=> setTitle(text)}
            /> 
        <Button title="Share Post" onPress={Submit} />
        <Button title="Share" onPress={sharePic} />
       
     
    
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
        <AntDesign style={styles.backButton} name="arrowleft" size={30} color="white" onPress={() => props.navigation.navigate('Camera')} />
      <View style={styles.buttonContainer}>
      <AntDesign style={styles.cameraButton} name="camera" size={34} color="black" onPress={takePic}/>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    marginBottom: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
    bottom: 0,

  },
  inputField:{
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: {width: 1, height: 1},
     textShadowRadius: 5,
    width: 300,
    height: 45,
    borderBottomColor:"#224957",
    borderBottomWidth: 2,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    alignSelf: 'center',
    color: "white",
    paddingLeft: 15,
    
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'flex-end',
  
  },

  optionButtons:{
    flexDirection: 'row',
    paddingTop:15,
    paddingRight:15,
  },

  backButton:{
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 80,
    left: 20,
  },
  cameraButton:{
  
  alignSelf:'center',
    lineHeight:70,
  }
});