import { getMarketProducts } from '../../api';

export const fetchProducts = authState => dispatch => {
  try {
    console.log('FETCHING PRODUCTS');
    dispatch({ type: 'LOADING_PRODUCTS' });
    getMarketProducts(authState).then(products => {
      dispatch({ type: 'LOADED_PRODUCTS', payload: products });
    });
  } catch (err) {
    dispatch({
      type: 'ERROR_PRODUCTS',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};
