import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const sellerInfo = useSelector(state => state.selectedSeller);
  const { selectedProduct } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    //   !todo fetch for seller's inventory
  }, []);

  return (
    <RenderSeller sellerInfo={sellerInfo} selectedProduct={selectedProduct} />
  );
}
