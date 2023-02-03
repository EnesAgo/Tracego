import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text ,StyleSheet, TextInput, Pressable } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'
import registerImg from '../../pictures/Register.png'

import api from '../../api/api'
import styles from './styles';



function SignIn(props) {
    const [isCheckboxSelected, setIsCheckboxSelected] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const [errorName, setErrorName] = useState('')
    const [showError, setShowError] = useState(false)


    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('jwt', jsonValue)
        console.log(jsonValue)
        
      } catch (e) {
        console.log(`error: ${e}`)
      }
    }

  async function checkStorage(){
    try {
      const value = await AsyncStorage.getItem('jwt')
      console.log(value)
 
  
        if (value !== null) {
          props.navigation.navigate("MyDrawer")
        }
  
    } catch (e) {
        console.log(`error: ${e}`)
    }
  }

  async function singInUser() {


    if(username.length === 0){

      setErrorName("Please Check Your UserName")
      setShowError(true)

      return
    }
    if(password.length === 0){

      setErrorName("Please Check Your Password")
      setShowError(true)

      return
    }


    const dataObj = {
      "username": username,
      "password": password,
    }



    const response = await api.post("/login", dataObj)


    if(response.error){
      setErrorName(response.error)
      setShowError(true)
      return
    }


    storeData(response)
    console.log(response)
    props.navigation.navigate('MyDrawer')


  }

  useEffect(() => {
    checkStorage()
  }, [])

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
        <Text style={styles.text}>SignIn</Text>
        <Text style={styles.paragraphText}>SignIn and start your travelling adventure</Text>

        <TextInput 
          autoCorrect={false}
          style={styles.inputField}
          placeholder={"Email or username"}
          placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
          autoCapitalize="none"
          onChangeText={(text)=> setUsername(text)}
        />
        <TextInput 
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.inputField}
          placeholder={"Password"}
          placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
          autoCapitalize="none"
          onChangeText={(text)=> setPassword(text)}
        />

        {/* <View style={styles.checkboxContainer}>
          <View style={styles.section}>
            <Checkbox
            style={styles.checkbox}
            disabled={false}
            value={isCheckboxSelected}
            color={isCheckboxSelected ? '#036b0a' : undefined}

            onValueChange={(newValue) => setIsCheckboxSelected(newValue)}
          />
          <Text 
          onPress={() => setIsCheckboxSelected(prev => !prev)} 
          style={styles.forgotPassword}>Remember me</Text>
        </View>

        <Text 
           onPress={() =>
              props.navigation.navigate('Register')
            }
           style={styles.forgotPassword}>Forgot password</Text>


        </View> */}

        <Pressable onPress={() => singInUser()} style={styles.buttonStyle}><Text style={styles.buttonText}>Sign In</Text></Pressable>
        
        <Text 
           onPress={() =>
              props.navigation.navigate('Register')
            }
            style={styles.createAccount}>
              Don't have an account yet?  <Text style={styles.blueText}>Sign Up</Text>
        </Text>

      </ImageBackground>
    </View>
    );    
  }

export default SignIn;