import React from 'react';
import { useSelector } from 'react-redux';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const sellerInfo = useSelector(state => state.selectedSeller);
  const { selectedProduct } = useSelector(state => state);

  return (
    <RenderSeller sellerInfo={sellerInfo} selectedProduct={selectedProduct} />
  );
}
