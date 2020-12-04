import React from 'react';
import { useParams } from 'react-router-dom';

const RenderProduct = () => {
  const params = useParams();
  // fetch API for product info via product id in params

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default RenderProduct;
