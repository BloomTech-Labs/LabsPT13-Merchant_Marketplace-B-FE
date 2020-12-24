import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfo from './userInfo';
import products from './products';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'],
};

const rootReducer = combineReducers({ userInfo, products });

export default persistReducer(persistConfig, rootReducer);
