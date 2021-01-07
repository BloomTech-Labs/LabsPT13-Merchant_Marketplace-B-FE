// Actions should be focused to a single purpose.
// You can have multiple action creators per file if it makes sense to the purpose those action creators are serving.
// Declare action TYPES at the top of the file

import { fetchUserInfo, fetchUserOrders } from './user';
import { fetchProducts } from './products';
import { selectProduct } from './product';
import { fetchCart, removeFromCart, addToCart } from './carts'
import { searchByTitle, updateValue } from './marketplaceSearch';
import {
  fetchSellerInfo,
  selectSeller,
  fetchSellerInventory,
  fetchSellerReviews,
} from './seller';
import { fetchWishlist } from './wishlists';

export {
  fetchUserInfo,
  fetchProducts,
  fetchUserOrders,
  selectProduct,
  searchByTitle,
  updateValue,
  fetchSellerInfo,
  selectSeller,
  fetchSellerInventory,
  fetchSellerReviews,
  fetchWishlist,
  fetchCart,
  removeFromCart,
  addToCart,
};
