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
import browserPaths from './browserPaths';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo', 'selectedProduct', 'selectedSeller', 'browserPaths'],
};

const rootReducer = combineReducers({
  userInfo,
  products,
  selectedProduct,
  marketplaceSearch,
  selectedSeller,
  sellerInfo,
  sellerInventory,
  browserPaths,
});

export default persistReducer(persistConfig, rootReducer);
