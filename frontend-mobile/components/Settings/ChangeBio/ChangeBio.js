import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './Style';
import api from '../../../api/api'
import * as Updates from 'expo-updates';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('jwt', jsonValue)
  } catch (e) {
    console.log(`error: ${e}`)
  }
}

function ChangeBio({props}) {

    const [newBio, setNewBio] = useState('')
  
    const [errorName, setErrorName] = useState('')
    const [showError, setShowError] = useState(false)


  async function Submit() {


  
      if(newBio.length === 0){
  
        setErrorName("Please Check Your old Password Field")
        setShowError(true)
  
        return
      }


      const accuuID = JSON.parse(await AsyncStorage.getItem('jwt')).uuID
  
        
        const dataObj = {
            "newBio": newBio
        }
  
        const responseData = await api.put(`/changeUserBio?uuID=${accuuID}`, dataObj)

        console.log(responseData)
    
  
        if(responseData.error){
          setErrorName(responseData.error)
          setShowError(true)
          return
        }
        
        storeData(resetData)

        resetData();

      }

      const resetData = async () => {
        try {
          Updates.reloadAsync()
        } catch (e) {
          console.log(`error: ${e}`)
        }
      }
  


    return (
        <View style={styles.bioContainer}>

              <AwesomeAlert
                // style={styles.popup}
                show={showError}
                showProgress={false}
                title="Error"
                message={errorName}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                  setShowError(false)
                }}
              />

            {/* <Button> */}
                <Pressable>

                    <TextInput
                      editable
                      multiline
                      numberOfLines={17}
                      maxLength={200}
                      autoCorrect={false}
                      placeholder={"new Bio"}
                      placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                      onChangeText={(text)=> setNewBio(text)}
                      style={styles.inputField}
                    />

                </Pressable>
            {/* </Button> */}

            <Pressable onPress={() => Submit()} style={styles.buttonStyle}><Text style={styles.buttonText}>Change Bio</Text></Pressable>


        </View>
    )

}


export default ChangeBio;