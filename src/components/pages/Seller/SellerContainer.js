import React from 'react';
import { useSelector } from 'react-redux';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const sellerInfo = useSelector(state => state.selectedSeller);

  console.log({ sellerInfo });

  return (
    <div>
      <RenderSeller />
    </div>
  );
}
