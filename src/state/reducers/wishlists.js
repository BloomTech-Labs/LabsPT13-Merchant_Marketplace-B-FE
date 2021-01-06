const initialState = {
  wishlist: [],
  error: '',
  loading: false,
};

const wishlists = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WISHLIST_LOADING':
      return { ...state, loading: true, error: '' };
    case 'WISHLIST_LOADED:':
      return { ...state, loading: false, wishlist: payload };
    case 'WISHLIST_ERRORS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(wishlist =>
          wishlist.id === type.id ? { ...wishlist, selected: false } : wishlist
        ),
      };
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(wishlist =>
          wishlist.id === type.id ? { ...wishlist, selected: true } : wishlist
        ),
      };
    default:
      return state;
  }
};

export default wishlists;
