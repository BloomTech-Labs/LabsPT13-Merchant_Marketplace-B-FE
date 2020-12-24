const selectedProduct = (state = null, { type, payload }) => {
  switch (type) {
    case 'PRODUCT_LOADED':
      return payload;
    default:
      return state;
  }
};

export default selectedProduct;
