import React, { useRef } from 'react'
import { View,Text,RefreshControl, Pressable, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import bg from '../../pictures/home1.jpg'
import picOne from '../../pictures/about1.png'
import PlacePlans from '../../components/PlacePlans/PlacePlans';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomePage (props) {

  const scrollViewRef = useRef();

  function Scroll() {
    scrollViewRef.current?.scrollTo({
      y: 1300,
      animated: true,
    });
  }

 
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView ref={scrollViewRef}>
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
            <Pressable onPress={Scroll} style={styles.reservePLanButton}>
              <Text style={styles.reservePLanButtonText}>Reserve a Place</Text>
            </Pressable>

            <View style={styles.aboutPicHolder}>
              <Image style={styles.aboutPic} source={picOne} />
            </View>
          </View>

          <View style={styles.choosePlace}>
            <Text style={styles.placeText}>Choose Your Place</Text>

            <PlacePlans />

          </View>

        </ScrollView>
       </SafeAreaView>

    )
  }



export default HomePage


