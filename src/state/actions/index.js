// import all of your actions into this file, and export them back out.
// This allows for the simplification of flow when importing actions into your components throughout your app.
// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

import { fetchUserInfo } from './userInfo';
import { fetchProducts } from './products';
import { selectProduct } from './product';
import { searchByTitle } from './marketplaceSearch';
import { fetchSellerInfo, selectSeller } from './sellerInfo';

export {
  fetchUserInfo,
  fetchProducts,
  selectProduct,
  searchByTitle,
  fetchSellerInfo,
  selectSeller,
};
