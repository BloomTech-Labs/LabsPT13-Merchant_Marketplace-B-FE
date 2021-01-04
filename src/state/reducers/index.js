import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfo from './userInfo';
import products from './products';
import selectedProduct from './selectedProduct';
import carts from './carts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo', 'selectedProduct'],
};

const rootReducer = combineReducers({ userInfo, products, selectedProduct,carts });

export default persistReducer(persistConfig, rootReducer);
