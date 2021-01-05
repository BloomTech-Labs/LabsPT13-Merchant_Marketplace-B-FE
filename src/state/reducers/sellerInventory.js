const initialState = {
  prevSellerId: null,
  inventory: null,
  loading: false,
  error: '',
};

const sellerInventory = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOADING_SELLER_INVENTORY':
      return { ...state, loading: true, error: '' };
    case 'LOADED_SELLER_INVENTORY':
      return {
        ...state,
        loading: false,
        inventory: payload.inventory,
        prevSellerId: payload.profile_id,
      };
    case 'ERROR_SELLER_INVENTORY':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default sellerInventory;
