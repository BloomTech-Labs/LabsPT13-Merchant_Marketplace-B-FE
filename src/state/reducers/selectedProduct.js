const selectedProduct = (state = null, { type, payload }) => {
  switch (type) {
    case 'PRODUCT_LOADED':
      return payload;
    case 'CLEAR':
      return null;
    default:
      return state;
  }
};

export default selectedProduct;
