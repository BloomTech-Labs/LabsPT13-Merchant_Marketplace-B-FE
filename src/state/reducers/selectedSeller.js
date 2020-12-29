const selectedSeller = (state = null, { type, payload }) => {
  switch (type) {
    case 'SELLER_LOADED':
      return payload;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};

export default selectedSeller;
