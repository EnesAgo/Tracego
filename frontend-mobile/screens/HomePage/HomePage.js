import React from 'react'
import { View,Text,RefreshControl, Pressable, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import bg from '../../pictures/home1.jpg'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomePage (props) {

 
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <ImageBackground source={bg} resizeMode="cover" style={styles.bg} imageStyle={{opacity:0.9}} >
          <View style={styles.welcomeView}>

            <Text style={styles.welcomeTextSmall}>Discover</Text>
            <Text style={styles.welcomeText}>The</Text>
            <Text style={styles.welcomeText}>Beautiful Places</Text>
            <Text style={styles.welcomeText}>İn Turkey.</Text>

          </View>
        </ImageBackground>

        <View style={styles.about}>
          <View style={styles.aboutHeader}>

            <Text style={styles.aboutHeaderText}>More Information</Text>
            <Text style={styles.aboutHeaderText}>About Tracego!</Text>

          </View>
          <View style={styles.aboutParagraph}>
          
            <Text style={styles.aboutParagraphText}>Our aim is to provide information about countries to our visitors,</Text>
            <Text style={styles.aboutParagraphText}>and to offer them a special opportunity so that they can spend a nice and quality time with their families,</Text>
            <Text style={styles.aboutParagraphText}>most people choose us because they know that we are the best at this .</Text>

          </View>

        </View>

        </ScrollView>
       </SafeAreaView>

    )
  }



export default HomePage


