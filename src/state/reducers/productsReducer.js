const initialState = {
  products: [],
  error: '',
  loading: false,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING':
      return { ...state, loading: true, error: '' };
    case 'SUCCESS':
      return { ...state, loading: false, products: payload };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      console.log('TEST FAILED!');
      return state;
  }
};

export default productsReducer;
