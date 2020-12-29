import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const sellerInfo = useSelector(state => state.selectedSeller);
  const { selectedProduct } = useSelector(state => state);

  useEffect(() => {
    //   !todo fetch for seller's inventory
  }, []);

  return (
    <RenderSeller sellerInfo={sellerInfo} selectedProduct={selectedProduct} />
  );
}
