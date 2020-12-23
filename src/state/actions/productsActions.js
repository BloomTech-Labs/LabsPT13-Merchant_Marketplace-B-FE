import { getMarketProducts } from '../../api';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const fetchProducts = authState => dispatch => {
  try {
    dispatch({ type: LOADING });
    console.log('FETCHING');
    getMarketProducts(authState).then(products => {
      dispatch({ type: SUCCESS, payload: products });
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};