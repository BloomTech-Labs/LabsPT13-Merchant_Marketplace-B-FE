const initialState = {
    carts: [],
    error: '',
    loading: false,
  };
  
  const carts = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'CARTS_LOADING':
        return { ...state, loading: true, error: '' };
      case 'CARTS_LOADED':
        return { ...state, loading: false, products: payload };
      case 'CART_ERRORS':
        return {
          ...state,
          loading: false,
          error: payload,
        };
      default:
        return state;
    }
  };
  
  export default carts;
  