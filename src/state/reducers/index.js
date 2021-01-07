import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userInfo from './userInfo';
import products from './products';
import selectedProduct from './selectedProduct';
<<<<<<< HEAD
import carts from './carts';
=======
import marketplaceSearch from './marketplaceSearch';
import sellerInfo from './sellerInfo';
import selectedSeller from './selectedSeller';
import sellerInventory from './sellerInventory';
import sellerReviews from './sellerReviews';
>>>>>>> 67922161a607c37295f29a8f8a4d81264438d8b4

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo', 'selectedProduct', 'selectedSeller'],
};

<<<<<<< HEAD
const rootReducer = combineReducers({ userInfo, products, selectedProduct,carts });
=======
const rootReducer = combineReducers({
  userInfo,
  products,
  selectedProduct,
  marketplaceSearch,
  selectedSeller,
  sellerInfo,
  sellerInventory,
  sellerReviews,
});
>>>>>>> 67922161a607c37295f29a8f8a4d81264438d8b4

export default persistReducer(persistConfig, rootReducer);
