import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import API from '../Services/API';
import userReducer from './Reducers/User';
//create a global store pass userReducer and Thunk Middleware for async actions with API Service
export const Store = createStore(
  userReducer,
  applyMiddleware(Thunk.withExtraArgument({API})),
);
