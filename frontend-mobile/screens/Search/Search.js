import React from 'react';
import { View , ImageBackground,Image, Pressable, ScrollView,Text} from 'react-native';
import notificationsBackground from '../../pictures/Notifications.png'
import styles from './styles';
import SearchBarNative from '../../components/searchbar/reactjs/SearchNative';


function Search(props){

  
    return (
      <View style={styles.container}>
        <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}} >
          <SearchBarNative props={props} />
        </ImageBackground>
      </View>
      
      
    )
  }

export default Search;