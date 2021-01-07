import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSellerInventory,
  fetchSellerReviews,
} from '../../../state/actions';
import RenderSeller from './RenderSeller';

export default function SellerContainer() {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { selectedSeller } = useSelector(state => state);
  const { inventory, prevSellerId, loading: loadingInventory } = useSelector(
    state => state.sellerInventory
  );
  const { reviews, loading: loadingReviews } = useSelector(
    state => state.sellerReviews
  );

  useEffect(() => {
    // only fetch for seller inventory and reviews if a different seller is selected
    if (inventory && reviews) {
      if (prevSellerId !== selectedSeller.id) {
        dispatch(fetchSellerInventory(authState, selectedSeller.id));
        dispatch(fetchSellerReviews(authState, selectedSeller.id));
      }
    } else {
      dispatch(fetchSellerInventory(authState, selectedSeller.id));
      dispatch(fetchSellerReviews(authState, selectedSeller.id));
    }
  }, [
    dispatch,
    inventory,
    reviews,
    prevSellerId,
    selectedSeller.id,
    authState,
  ]);

  return (
    <RenderSeller
      selectedSeller={selectedSeller}
      inventory={inventory}
      reviews={reviews}
      loadingInventory={loadingInventory}
      loadingReviews={loadingReviews}
    />
  );
}
