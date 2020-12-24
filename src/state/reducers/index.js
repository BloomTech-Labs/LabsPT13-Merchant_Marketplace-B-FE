import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfoReducer from './userInfoReducer';
import productsReducer from './productsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfoReducer'],
};

const rootReducer = combineReducers({ userInfoReducer, productsReducer });

export default persistReducer(persistConfig, rootReducer);
