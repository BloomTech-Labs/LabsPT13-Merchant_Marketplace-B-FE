import { getProfileData } from '../../api';

export const fetchSellerInfo = (authState, profile_id) => dispatch => {
  console.log('FETCHING SELLER');
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
