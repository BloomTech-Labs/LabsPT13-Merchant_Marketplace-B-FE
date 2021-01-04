import {
  getProfileData,
  getProfileInventory,
  getSellerReviews,
} from '../../api';

export const fetchSellerInfo = (authState, profile_id) => dispatch => {
  dispatch({ type: 'LOADING_SELLER_INFO' });

  getProfileData(authState, profile_id)
    .then(sellerInfo => {
      dispatch({
        type: 'LOADED_SELLER_INFO',
        payload: sellerInfo,
      });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR_SELLER_INFO',
        payload: 'Request failed, please try again!',
      });
      console.error(err);
    });
};

export const selectSeller = sellerInfo => ({
  type: 'SELLER_SELECTED',
  payload: sellerInfo,
});

export const fetchSellerInventory = (authState, profile_id) => dispatch => {
  dispatch({ type: 'LOADING_SELLER_INVENTORY' });

  getProfileInventory(authState, profile_id)
    .then(inventory => {
      dispatch({
        type: 'LOADED_SELLER_INVENTORY',
        payload: { inventory, profile_id },
      });
    })
    .catch(err => {
      dispatch({
        type: 'ERROR_SELLER_INVENTORY',
        payload: 'Request failed, please try again!',
      });
      console.error(err);
    });
};

export const fetchSellerReviews = (authState, seller_id) => dispatch => {
  dispatch({ type: 'REVIEWS_LOADING' });

  getSellerReviews(authState, seller_id)
    .then(reviews => {
      dispatch({ type: 'REVIEWS_LOADED', payload: reviews });
    })
    .catch(err => {
      dispatch({
        type: 'REVIEWS_ERROR',
        payload: 'Request failed, please try again!',
      });
      console.error(err);
    });
};
