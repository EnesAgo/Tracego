import React from 'react';
import { Image } from 'react-native';

function tabBarIconFunc({ route, focused, size }) {
    
            if (route.name === "HomePage") {
            return <Image style={{ width: 25, height: 25 }} source={require('./images/home.png')} />
    
          } else if (route.name === "Search") {
            return <Image style={{ width: 30, height: 30 }} source={require('./images/search.png')} />
            
          } else if (route.name === "Camera") {
            return <Image style={{ width: 35, height: 35 }} source={require('./images/post.png')} />
    
          } else if (route.name === "Notifications") {
            return <Image style={{ width: 25, height: 25, display: 'none' }} source={require('./images/notifications.png')} />
            
          } else if (route.name === "Map") {
            return <Image style={{ width: 30, height: 30 }} source={require('./images/map.webp')} />
    
          } else if (route.name === "profile") {
            return <Image style={{ width: 25, height: 25 }} source={require('./images/user.png')} />
    
          } 
          
        }
export default tabBarIconFunc