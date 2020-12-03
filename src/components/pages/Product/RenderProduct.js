import React from 'react';
import { useLocation } from 'react-router-dom';

const RenderProduct = () => {
  const { product } = useLocation();
  console.log(product);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default RenderProduct;
