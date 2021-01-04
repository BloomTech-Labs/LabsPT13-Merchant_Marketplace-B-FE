import { getCartItems } from '../../api';

export const fetchCart = (profile_id,authState) => dispatch => {
  try {
    console.log('FETCHING ITEMS FROM THE CART');
    dispatch({ type: 'CARTS_LOADING' });
    getCartItems(profile_id,authState).then(items => {
      dispatch({ type: 'CARTS_LOADED', payload: items });
    });
  } catch (err) {
    dispatch({
      type: 'CART_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};
