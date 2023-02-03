import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View, Text,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';



import styles from './styles';

function Header({props}) {
  const [openView, setOpenView] = useState(false)

  const resetData = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

      return (
        <View style={styles.header} >

<View style={[styles.aiChallenge , !openView && styles.aiChallengeOpen, ]} >
            <Pressable onPress={() => setOpenView(true)}>
                 <View style={styles.menuContainer}>
                     <Text style={styles.headerText}>Menu</Text>
                      <AntDesign style={styles.header} onPress={()=> setOpenView(false)}  name="closecircleo" size={24} color="white" />
                 </View>
                 <View style={styles.menuRoots}>
                 <Text 
           onPress={() =>
              props.navigation.navigate('profile')
            }
            style={styles.menuText}>
              Account
        </Text>
        <Text 
           onPress={() =>
              props.navigation.navigate('Notifications')
            }
            style={styles.menuText}>
              Notifications
        </Text>
        <Text 
           onPress={() =>
              {
                props.navigation.navigate('SignIn');
                resetData();
             
              }
            }
            style={styles.menuText}>
              Log Out
        </Text>
                 </View>
            </Pressable>
        </View>
            

            <Text style={styles.Logo}>Logo</Text>
            <Ionicons  onPress={() => setOpenView(true)} name="menu-sharp" size={24} color="white" />
            
            

        </View>
      )
  }

export default Header;