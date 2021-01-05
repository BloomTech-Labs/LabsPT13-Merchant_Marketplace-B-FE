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
