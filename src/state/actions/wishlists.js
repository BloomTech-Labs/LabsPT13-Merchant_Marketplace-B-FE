import { getWishListProducts } from '../../api';

export const fetchWishlist = authState => dispatch => {
  try {
    console.log('FETCHING WISHLIST');
    dispatch({ type: 'WISHLIST_LOADING' });
    getWishListProducts(authState).then(wishlist => {
      dispatch({ type: 'WISHLIST_LOADED', payload: wishlist });
    });
  } catch (err) {
    dispatch({
      type: 'WISHLIST_ERROR',
      payload: 'Request failed, please try again',
    });
  }
};
