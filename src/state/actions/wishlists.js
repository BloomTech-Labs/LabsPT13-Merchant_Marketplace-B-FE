import { getWishListProducts, removeWishlistById } from '../../api';

export const fetchWishlist = (authState, profile_id) => dispatch => {
  try {
    console.log('FETCHING WISHLIST');
    dispatch({ type: 'WISHLIST_LOADING' });
    getWishListProducts(profile_id, authState).then(wishlist => {
      dispatch({ type: 'WISHLIST_LOADED', payload: wishlist });
    });
  } catch (err) {
    dispatch({
      type: 'WISHLIST_ERROR',
      payload: 'Request failed, please try again',
    });
  }
};

export const removeFromWishlist = (
  authState,
  profile_id,
  product_id
) => dispatch => {
  try {
    console.log('FETCHING WISHLIST');
    dispatch({ type: 'WISHLIST_LOADING' });
    removeWishlistById(profile_id, product_id, authState).then(() => {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product_id });
    });
  } catch (err) {
    dispatch({
      type: 'REMOVE_WISHLIST_FAILED',
      payload: 'Request Failed',
    });
  }
};
