import { getProfileOrders } from '../../api';

export const fetchUserInfo = (memoAuthService, isSubscribed) => dispatch => {
  try {
    dispatch({ type: 'LOADING_USER_INFO' });

    memoAuthService
      .getUser()
      .then(userInfo => {
        if (isSubscribed) {
          dispatch({
            type: 'LOADED_USER_INFO',
            payload: userInfo,
          });
        }
      })
      .catch(err => {
        dispatch({
          type: 'ERROR_USER_INFO',
          payload: 'Request failed, please try again!',
        });
        console.error(err);
      });
  } catch (error) {
    isSubscribed = false;
  }
};

export const fetchUserOrders = (authState, profile_id) => dispatch => {
  try {
    dispatch({ type: 'ORDERS_LOADING' });

    getProfileOrders(authState, profile_id).then(orders => {
      dispatch({ type: 'ORDERS_LOADED', payload: orders });
    });
  } catch (err) {
    dispatch({
      type: 'ORDERS_ERROR',
      payload: 'Request failed, please try again!',
    });
    console.error(err);
  }
};
