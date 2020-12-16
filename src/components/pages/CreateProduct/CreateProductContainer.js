import React from 'react';
import RenderCreateProduct from './RenderCreateProduct';

export default function CreateProductContainer() {
  const sellerInfo = JSON.parse(window.localStorage.getItem('user'));

  return (
    <div>
      <RenderCreateProduct sellerInfo={sellerInfo} />
    </div>
  );
}
