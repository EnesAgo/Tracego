import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';
import api from '../../../api/api'
import * as Updates from 'expo-updates';

function ChangePassword({props}) {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
  
    const [errorName, setErrorName] = useState('')
    const [showError, setShowError] = useState(false)


async function Submit() {


    const passVerify = confirmPassword;
  
      if(oldPassword.length === 0){
  
        setErrorName("Please Check Your old Password Field")
        setShowError(true)
  
        return
      }
      if(newPassword.length === 0){
  
        setErrorName("Please Check Your new Password Field")
        setShowError(true)
  
        return
      }
      if(passVerify.length === 0){
  
        setErrorName("Please Check Your Confirm Password")
        setShowError(true)
  
        return
      }
  
      if(newPassword.length < 8){
          if(password.length === 0) return
  
          setErrorName("Your Password must be at least 8 characters")
          setShowError(true)
  
              return
          }
  
      if(newPassword !== passVerify){
          setErrorName("Your password does not match")
          setShowError(true)
  
          return
      }

      const accuuID = JSON.parse(await AsyncStorage.getItem('jwt')).uuID
  
        
        const dataObj = {
            "oldPassword": oldPassword,
            "newPassword": newPassword
        }

     
  
        const responseData = await api.put(`/changePassword?uuID=${accuuID}`, dataObj)
    
  
        if(responseData.error){
          setErrorName(responseData.error)
          setShowError(true)
          return
        }
        
        resetData();

      }

      const resetData = async () => {
        try {
          await AsyncStorage.clear()
          Updates.reloadAsync()
        } catch (e) {
          console.log(`error: ${e}`)
        }
      }
  


    return (
        <View>
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
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.inputField}
                        placeholder={"old Password"}
                        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                        autoCapitalize="none"
                        onChangeText={(text)=> setOldPassword(text)}
                    />
                    <TextInput 
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.inputField}
                        placeholder="New Password"
                        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                        autoCapitalize="none"
                        onChangeText={(text)=> setNewPassword(text)}
                    />
                    <TextInput 
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.inputField}
                        placeholder="Confirm Password"
                        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                        autoCapitalize="none"
                        onChangeText={(text)=> setConfirmPassword(text)}
                    />

                </Pressable>
            {/* </Button> */}

            <Pressable onPress={() => Submit()} style={styles.buttonStyle}><Text style={styles.buttonText}>Change Password</Text></Pressable>


        </View>
    )

}


export default ChangePassword;