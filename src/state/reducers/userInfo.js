const initialState = {
  userInfo: null,
  loading: false,
  error: '',
};

const userInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING_USER_INFO':
      return { ...state, loading: true, error: '' };
    case 'LOADED_USER_INFO':
      return { ...state, loading: false, userInfo: payload };
    case 'ERROR_USER_INFO':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userInfo;
