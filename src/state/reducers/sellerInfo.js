const initialState = {
  sellerInfo: null,
  loading: false,
  error: '',
};

const sellerInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING_SELLER_INFO':
      return { ...state, loading: true, error: '' };
    case 'LOADED_SELLER_INFO':
      return { ...state, loading: false, sellerInfo: payload };
    case 'ERROR_SELLER_INFO':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default sellerInfo;
