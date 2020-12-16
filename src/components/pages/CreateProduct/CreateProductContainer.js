import React from 'react';
import RenderCreateProduct from './RenderCreateProduct';

export default function CreateProductContainer() {
  const userInfo = JSON.parse(window.localStorage.getItem('user'));

  return (
    <div>
      <RenderCreateProduct userInfo={userInfo} />
    </div>
  );
}
