import { getCartItems } from '../../api';

export const fetchCart = authState => dispatch => {
  try {
    console.log('FETCHING ITEMS FROM THE CART');
    dispatch({ type: 'CART_LOADING' });
    getCartItems(authState).then(items => {
      dispatch({ type: 'PRODUCTS_LOADED', payload: items });
    });
  } catch (err) {
    dispatch({
      type: 'CART_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};