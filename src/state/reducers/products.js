const initialState = {
  products: null,
  error: '',
  loading: false,
};

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'PRODUCTS_LOADING':
      return { ...state, loading: true, error: '' };
    case 'PRODUCTS_LOADED':
      return { ...state, loading: false, products: payload };
    case 'PRODUCTS_ERRORS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default products;
