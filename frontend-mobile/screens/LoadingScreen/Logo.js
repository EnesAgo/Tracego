import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Text style={styles.logoStyle}>Harsal</Text>
    </View>
  )
}


const styles = new StyleSheet.create({
    logoStyle: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 15,
    }
  })