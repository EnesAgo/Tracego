  
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'http://192.168.149.204:3001',
    timeout: 10000,
  });

// Add a request interceptor
instance.interceptors.request.use(async function (config) {

  try {
    const value = JSON.parse(await AsyncStorage.getItem('jwt'))
    // console.log(`token: ${value.token}`)

      if (value !== null) {
          const accessToken = value.token;
          config.headers.common = { Authorization: `Bearer ${accessToken}` };
      }

  } catch (e) {
      console.log(`error: ${e}`)
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});


// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default instance