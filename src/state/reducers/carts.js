const initialState = {
    cart: [],
    error: '',
    loading: false,
  };
  
  const carts = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'CARTS_LOADING':
        return { ...state, loading: true, error: '' };
      case 'CARTS_LOADED':
        return { ...state, loading: false, cart: payload };
      case 'CART_ERRORS':
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case 'REMOVING_FROM_CART':
        return { ...state, loading: true, error: '' };
      case 'ITEM_REMOVED':
        return { ...state, loading: false, cart: payload };
      case 'ERROR_REMOVING_ITEM':
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case 'ADDING_TO_CART':
        return { ...state, loading: true, error: '' };
      case 'ITEM_ADDED':
        return { ...state, loading: false, cart: payload };
      case 'ERROR_ADDING_ITEM':
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
  