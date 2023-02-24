import React from 'react'
import { View,Text,RefreshControl, Pressable, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { Linking} from 'react-native'


function PlacePlans () {

    const places = [
        {
            placeName: "Istanbul",
            picture: require("./images/place1.png"),
            price: "€143",
            stars: "4,6"
        },
        {
            placeName: "Antalya",
            picture: require("./images/place2.png"),
            price: "€130",
            stars: "5,0"
        },
        {
            placeName: "Izmir",
            picture: require("./images/place3.png"),
            price: "€100",
            stars: "4,7"
        },
        {
            placeName: "Trabzon",
            picture: require("./images/place4.png"),
            price: "€75",
            stars: "4,8"
        },
        {
            placeName: "Çanakkale",
            picture: require("./images/place5.png"),
            price: "€93",
            stars: "4,3"
        },
        {
            placeName: "Bodrum",
            picture: require("./images/place6.png"),
            price: "€175",
            stars: "5,0"
        },
        {
            placeName: "Yalova",
            picture: require("./images/place7.png"),
            price: "€137",
            stars: "4,3"
        },
        {
            placeName: "Kapadokya",
            picture: require("./images/place8.png"),
            price: "€97",
            stars: "5,0"
        },
        {
            placeName: "Mersin",
            picture: require("./images/place9.png"),
            price: "€117",
            stars: "4,5"
        },
    ]

 
    return (
        <View>

            {
                places.map(e => (

                        <View key={e.placeName} style={styles.placeView}>
                            <ImageBackground style={styles.imageBackground} source={e.picture}>


                                <Text style={styles.stars}>⭐ {e.stars}</Text>

                                <View style={{marginBottom: 15, paddingLeft: 15, width: "100%", textAlign: "left"}}>
                                    <View style={{marginBottom: 15}}>
                                        <Text style={styles.placeNameText}>{e.placeName}</Text>
                                        <Text style={styles.placeNameTurkey}>Turkey</Text>
                                    </View>

                                    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: 15}}>
                                        <Text style={styles.price}>{e.price}</Text>
                                        <Pressable style={styles.button} onPress={() => {
                                            Linking.openURL(`http://192.168.196.204:3000/order/${e.placeName}`);
                                        }}>
                                            <Text style={styles.rightArrow}>→</Text>
                                        </Pressable>
                                    </View>
                                </View>

                            </ImageBackground>
                        </View>
                    )
                )
            }

        </View>

    )
  }



export default PlacePlans


