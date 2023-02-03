import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../api/api'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Updates from 'expo-updates';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('jwt', jsonValue)
    console.log(jsonValue)
    
  } catch (e) {
    console.log(`error: ${e}`)
  }
}

async function reGetJwt(response) {
  const jwt = JSON.parse(await AsyncStorage.getItem('jwt'))
  const token = jwt.token

  const finalData = {
    ...response,
    token: token
  }

  storeData(finalData)

}
function ChangeProfilePic() {

    const [image, setImage] = useState('')
    const [uploadImage, setUploadImage] =useState('')

  
    const [errorName, setErrorName] = useState('')
    const [showError, setShowError] = useState(false)

  
const pickImageNewWay= async () => {
    const accuuID = JSON.parse(await AsyncStorage.getItem('jwt')).uuID

    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
    });
  
    if (result.cancelled) {
        return;
    }
  
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
    formData.append('image', { uri: localUri, name: filename, type });
  
    await api.put(`/changeUserImage?uuID=${accuuID}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    }).then(res => {
        setUploadImage(`${res.UserImage}`);
        reGetJwt(res)
      }).catch(err => {
        console.log(err.response);
    });
}

    return (
   
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Pick an image from camera roll" onPress={pickImageNewWay} />
          {uploadImage && <Image source={{ uri: uploadImage }} style={{ width: 200, height: 200 , borderRadius: 50}} /> }
          {/* {uploadImage && <Button title="Confirm" onPress={Submit}/>} */}
        </View>
    
    
    )

}


export default ChangeProfilePic;