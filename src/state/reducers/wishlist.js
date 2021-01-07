const initialState = {
  wishlist: [],
  loading: true,
  error: '',
};

const wishlist = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'WISHLIST_LOADING':
      return { ...state, loading: true, error: '' };
    case 'WISHLIST_LOADED':
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
        wishlist: wishlist.filter(
          item => item.product_id !== payload.product_id
        ),
      };
    default:
      return state;
  }
};

export default wishlist;
