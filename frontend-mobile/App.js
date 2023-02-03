import * as React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from './screens/Notifications/Notifications';
import Register from './screens/Register/Register';
import SignIn from './screens/SignIn/SignIn';
import HomePage from './screens/HomePage/HomePage';
import Search from './screens/Search/Search';
import tabBarIconFunc from './components/tabbar/tabbar';
import Profile from './screens/Profile/Profile';
import Map from './screens/Map/Map';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Camera from './screens/Camera/Camera';
import Settings from './screens/Settings/Settings';
import LogOut from './screens/LogOut/Logout';
import {  DrawerToggleButton } from '@react-navigation/drawer';
import TakePicture from './screens/Post/TakePicture';
import FullPost from './screens/FullPost/FullPost';
import LoadingScreen from './screens/LoadingScreen/LoadingScreen';
import Logo from './screens/LoadingScreen/Logo';
import PlaceStroys from './screens/PlaceStorys/PlaceStroys';
import GpsDeneme from './GpsDeneme'
import api from './api/api'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('jwt', jsonValue)
    console.log(jsonValue)
    
  } catch (e) {
    console.log(`error: ${e}`)
  }
}


const MyDrawer = () => {
  return (
   
    <Drawer.Navigator
    
    screenOptions={
   {
      drawerStyle: {
        backgroundColor: '#1678ca',
      },
     
      labelStyle: {
        color:"#fff",
      },
    
        drawerPosition:"rigth",
        headerLeft: () => <Logo />,
        headerRight: () => <DrawerToggleButton tintColor='#fff'/>,
        headerStyle: {
          backgroundColor: '#1678ca',
        },
        headerTitleStyle: {
          color:"#fff",
        },
        drawerLabelStyle:{
          color: "#fff",
        }

      

   }
    }
    >
   
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name= "LogOut" component={LogOut} />
      
      
    </Drawer.Navigator>
  );
}


const MainScreen = () =>{

  React.useEffect(() => {

    async function reGetJwt() {
      const jwt = JSON.parse(await AsyncStorage.getItem('jwt'))
      const uuID = jwt.uuID
      const token = jwt.token

      const response = await api.get(`/getProfile?uuID=${uuID}`)

      const finalData = {
        ...response,
        token: token
      }

      storeData(finalData)

    }

    reGetJwt()

    
  }, [])




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

      <Bottom.Screen name='Camera' component={Camera} />

      {/* <Bottom.Screen name="FullPost" component={FullPost} /> */}
  
      <Bottom.Screen name="Map" component={Map} initialParams={{postLat: "0", postLon: "0" }} />

      <Bottom.Screen name="profile" component={Profile} />
    
    
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
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name='MyDrawer' component={MyDrawer} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Bottom.Screen name="TakePicture" component={TakePicture} />
          <Bottom.Screen name='FullPost' component={FullPost} />
          <Bottom.Screen name='PlaceStroys' component={PlaceStroys} />
          <Stack.Screen name='Location' component={GpsDeneme} />
         
         


        
      </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}



