const initialState = {
  reviews: null,
  error: '',
  loading: true,
};

const sellerReviews = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'REVIEWS_LOADING':
      return { ...state, loading: true, error: '' };
    case 'REVIEWS_LOADED':
      return { ...state, loading: false, reviews: payload };
    case 'REVIEWS_ERRORS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default sellerReviews;
