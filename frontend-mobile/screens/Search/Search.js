import React from 'react';
import { View , ImageBackground,Image, Pressable, ScrollView,Text} from 'react-native';
// import SearchBarContainer from '../../components/searchbar/SearchBar';
import notificationsBackground from '../../pictures/Notifications.png'
import styles from './styles';
import SearchBarNative from '../../components/searchbar/reactjs/SearchNative';
import FollowedCitys from '../../components/FollowedCitys/FollowedCitys';


function Search(props){

  
    return (
      <View style={styles.container }>
        <ImageBackground source={notificationsBackground} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.3}} >
          <SearchBarNative props={props} />
          <FollowedCitys props={props} />
        </ImageBackground>
      </View>
      
      
    )
  }

export default Search;