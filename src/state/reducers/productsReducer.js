const initialState = {
  products: [],
  error: '',
  loading: false,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING_PRODUCTS':
      return { ...state, loading: true, error: '' };
    case 'LOADED_PRODUCTS':
      return { ...state, loading: false, products: payload };
    case 'ERROR_PRODUCTS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
