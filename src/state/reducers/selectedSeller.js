const selectedSeller = (state = null, { type, payload }) => {
  switch (type) {
    case 'SELLER_SELECTED':
      return payload;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};

export default selectedSeller;
