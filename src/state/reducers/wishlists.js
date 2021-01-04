const initialState = {
  wishlists: [],
  error: '',
  loading: false,
};

const wishlists = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WISHLIST_LOADING':
      return { ...state, loading: true, error: '' };
    case 'WISHLIST_LOADED:':
      return { ...state, loading: false, wishlists: payload };
    case 'WISHLIST_ERRORS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'START_ADDED':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'WISHLIST_ADDED':
      return {
        ...state,
        loading: false,
        error: '',
        wishlists: payload,
      };
    case 'WISHLIST_FAIL':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default wishlists;
