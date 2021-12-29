import axios from 'axios';
import {BASEURL} from '../Constant';
import {Store} from '../Redux';
import types from '../Redux/types';
// create a axios instance
const API = axios.create({baseURL: BASEURL, timeout: 5000});

// Add a request interceptor
API.interceptors.request.use(
  config => {
    //start the loading indicator inside the app on api call
    Store.dispatch({type: types.apiLoading, payload: {loading: true}});
    return config;
  },
  error => {
    //stop loading indicator and return error in action
    Store.dispatch({type: types.apiLoading, payload: {loading: false}});
    return Promise.reject(error);
  },
);

// Add a response interceptor
API.interceptors.response.use(
  response => {
    Store.dispatch({type: types.apiLoading, payload: {loading: false}});
    return response;
  },
  error => {
    Store.dispatch({type: types.apiLoading, payload: {loading: false}});
    return Promise.reject(error);
  },
);

export default API;
