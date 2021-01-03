import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSellerInventory } from '../../../state/actions';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { selectedSeller, selectedProduct } = useSelector(state => state);

  const { inventory, prevSellerId } = useSelector(
    state => state.sellerInventory
  );

  useEffect(() => {
    // only fetch for seller inventory if a different seller is selected
    if (inventory.length) {
      if (prevSellerId !== selectedSeller.id) {
        dispatch(fetchSellerInventory(authState, selectedSeller.id));
      }
    } else {
      dispatch(fetchSellerInventory(authState, selectedSeller.id));
    }
  }, [dispatch, inventory.length, prevSellerId, selectedSeller.id, authState]);

  return (
    <RenderSeller
      selectedSeller={selectedSeller}
      selectedProduct={selectedProduct}
      inventory={inventory}
    />
  );
}
