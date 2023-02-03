import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';


const SearchBarContainer = () => {

        const [search, setSearch] = useState("");
        
        const updateSearch = (search) => {
          setSearch(search);
        };
        
    
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>

            <TextInput autoCorrect={false} style={styles.inputField} autoCapitalize="none" placeholder='Search...'  placeholderTextColor={'#797979'} />
            <AntDesign style={styles.searchIcon} name="search1" size={20} color="#fff"  />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginBottom:10,
        justifyContent: "flex-start",
        marginBottom: 10
    },

    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf:"center",
        width: "80%",
        borderBottomColor : "#797979",
        borderBottomWidth: 3,
        
    },

    inputField:{
        backgroundColor: "none",
        marginTop:10,
        
    },

    searchIcon: {
        marginRight: 10,
    },
    usernameText: {
        color: "white",
        
    },
    likeText:{
        color: "White",
    }

})

export default SearchBarContainer