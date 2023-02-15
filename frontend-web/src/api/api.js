
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
  });

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.getItem('jwt')) {
      const accessToken = JSON.parse(localStorage.getItem('jwt')).token;
      config.headers.common = { Authorization: `Bearer ${accessToken}` };
  }
  return config;
}, function (error) {
  // Do something with request error
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