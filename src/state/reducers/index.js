import { combineReducers } from 'redux';
// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import userInfoReducer from './userInfoReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({ userInfoReducer, productsReducer });

export default rootReducer;
