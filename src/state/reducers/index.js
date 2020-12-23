import { combineReducers } from 'redux';
// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import productsReducer from './productsReducer';

const rootReducer = combineReducers({ productsReducer });

export default rootReducer;
