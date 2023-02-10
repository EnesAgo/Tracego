import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './screens/HomePage/HomePage';
import Search from './screens/Search/Search';
import tabBarIconFunc from './components/tabbar/tabbar';
import Map from './screens/Map/Map';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import GpsDeneme from './GpsDeneme'
import About from './screens/About/About';
import api from './api/api'
import Gallery from './screens/Gallery/Gallery';


const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();


const MainScreen = () =>{

  return (

    <Bottom.Navigator 
    initialRouteName="Dashboard"  
    screenOptions={(route)=> ({
      tabBarIcon: ({focused, size}) => tabBarIconFunc(route, focused, size),
      tabBarLabel: () => {return null},
      headerStyle: {
        height: 0,
        opacity: 0
      },
      // headerShown: false,
      tabBarStyle: {
        height:70, 
        paddingHorizontal: 15
      },
      tabBarItemStyle: {
        // display: (route.name == "Notifications") ? "none" : "flex"
        // display: () => tabBarStyles(route)
      },
    })}
    >

      <Bottom.Screen name="HomePage" component={HomePage} />

      <Bottom.Screen name='Search' component={Search} />
  
      <Bottom.Screen name="Map" component={Map} initialParams={{postLat: "0", postLon: "0" }} />
    
    
    </Bottom.Navigator>
    
  );
 }

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name='Location' component={GpsDeneme} />
        
      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}



