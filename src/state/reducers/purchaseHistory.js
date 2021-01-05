const initialState = {
  orders: null,
  error: '',
  loading: false,
};

const purchaseHistory = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ORDERS_LOADING':
      return { ...state, loading: true, error: '' };
    case 'ORDERS_LOADED':
      return { ...state, loading: false, orders: payload };
    case 'ORDERS_ERRORS':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default purchaseHistory;
