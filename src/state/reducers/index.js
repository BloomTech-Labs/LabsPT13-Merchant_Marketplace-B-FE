
// import all of your reducers into this file, and export them back out. 
// This allows for the simplification of flow when importing reducers into your actions throughout your app.


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  carts,
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfo from './userInfo';
import products from './products';
import selectedProduct from './selectedProduct';
import marketplaceSearch from './marketplaceSearch';
import sellerInfo from './sellerInfo';
import selectedSeller from './selectedSeller';
import sellerInventory from './sellerInventory';
import sellerReviews from './sellerReviews';
import wishlist from './wishlist';
import purchaseHistory from './purchaseHistory';
import carts from './carts';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo', 'selectedProduct', 'selectedSeller'],
};

const rootReducer = combineReducers({
  userInfo,
  products,
  selectedProduct,
  marketplaceSearch,
  selectedSeller,
  sellerInfo,
  sellerInventory,
  sellerReviews,
  wishlist,
  purchaseHistory,
  carts
});

export default persistReducer(persistConfig, rootReducer);
