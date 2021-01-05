import { getMarketProducts } from '../../api';

export const fetchProducts = authState => dispatch => {
  try {
    dispatch({ type: 'PRODUCTS_LOADING' });
    getMarketProducts(authState).then(products => {
      dispatch({ type: 'PRODUCTS_LOADED', payload: products });
    });
  } catch (err) {
    dispatch({
      type: 'PRODUCTS_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};

export const fetchOrders = (authState, profile_id) => dispatch => {
  try {
  } catch (err) {
    dispatch({
      type: 'ORDERS_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};
