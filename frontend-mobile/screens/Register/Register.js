import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text ,StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
import { ImageBackground } from 'react-native'
import registerImg from '../../pictures/Register.png'

import styles from './styles'
import api from '../../api/api'


function Register(props) {   

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorName, setErrorName] = useState('')
  const [showError, setShowError] = useState(false)

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('jwt', jsonValue)
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

    async function Submit() {


      const passVerify = confirmPassword;

    if(username.length === 0){

      setErrorName("Please Check Your UserName")
      setShowError(true)

      return
    }
    if(email.length === 0){

      setErrorName("Please Check Your Email")
      setShowError(true)

      return
    }
    if(password.length === 0){

      setErrorName("Please Check Your Password")
      setShowError(true)

      return
    }
    if(passVerify.length === 0){

      setErrorName("Please Check Your Confirm Password")
      setShowError(true)

      return
    }

    if(password.length < 8){
        if(password.length === 0) return

        setErrorName("Your Password must be at least 8 characters")
        setShowError(true)

            return
        }

    if(password !== passVerify){
        setErrorName("Your password does not match")
        setShowError(true)

        return
    }

      
      const dataObj = {
        "username": username,
        "email": email,
        "password": password,
        // "phone": "asdasd"
      }

      const response = await api.post("/createuser", dataObj)
 

      if(response.error){
        setErrorName(response.error)
        setShowError(true)
        return
      }

      console.log(response)

      storeData(response)
      props.navigation.navigate('MyDrawer')
      
    }

    return(
      <View style={styles.container}>
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
      <ImageBackground source={registerImg} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.paragraphText}>Sign up and start your travelling adventure</Text>
        <TextInput 
        autoCorrect={false}
        style={styles.inputField}
        placeholder="Username"
        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
        autoCapitalize="none"
        onChangeText={(text)=> setUsername(text)}
        />
        <TextInput 
        autoCorrect={false}
        style={styles.inputField}
        placeholder="E-Mail"
        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
        autoCapitalize="none"
        onChangeText={(text)=> setEmail(text)}
        />
        <TextInput 
        autoCorrect={false}
        secureTextEntry={true}
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
        autoCapitalize="none"
        onChangeText={(text)=> setPassword(text)}
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
      <Text onPress={() =>
              props.navigation.navigate('SignIn')
            }    
            style={styles.paragraphText}>Already have an account? Sign In</Text>


    <Pressable onPress={() => Submit()} style={styles.buttonStyle}><Text style={styles.buttonText}>Register</Text></Pressable>
      </ImageBackground>
    </View>
    );
    
  }

export default Register