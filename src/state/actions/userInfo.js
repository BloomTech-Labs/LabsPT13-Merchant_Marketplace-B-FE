export const fetchUserInfo = (memoAuthService, isSubscribed) => dispatch => {
  try {
    console.log('FETCHING USER');
    dispatch({ type: 'LOADING_USER_INFO' });

    memoAuthService
      .getUser()
      .then(userInfo => {
        if (isSubscribed) {
          dispatch({
            type: 'LOADED_USER_INFO',
            payload: userInfo,
          });

          // persist logged user info via local storage
          window.localStorage.setItem('user_info', JSON.stringify(userInfo));
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
