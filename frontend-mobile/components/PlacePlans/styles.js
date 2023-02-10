import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({


    placeView: {
        width: windowWidth-100,
        height: 300,
        marginVertical: 50
    },
    imageBackground: {
        width: "100%",
        height: 350,

        flexDirection: "column",
        justifyContent: "space-between"
    },



    stars: {
        marginTop: 15, 
        paddingRight: 15, 
        width: "100%",
        textAlign: "right",

        color: "#fff",
        fontSize: 16,
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
    },
    placeNameText: {
        color: "#fff",
        fontSize: 30,
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },
    placeNameTurkey: {
        color: "#fff",
        fontSize: 20,
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    },

    price: {
        color: "#fff",
        fontSize: 24,
        textShadowColor: '#000',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "rgb(33, 45, 65)",
        alignItems: "center",
        justifyContent: "center"
    },
    rightArrow: {
        color: "#fff",
        fontSize: 24,
        textShadowColor: '#000',
    }


  }
)

export default styles