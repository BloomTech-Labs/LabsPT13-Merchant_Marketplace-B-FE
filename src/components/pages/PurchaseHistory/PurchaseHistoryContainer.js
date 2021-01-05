import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrders } from '../../../state/actions';
import RenderPurchaseHistory from './RenderPurchaseHistory';

export default function PurchaseHistoryContainer() {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { userInfo } = useSelector(state => state.userInfo);
  const { orders, loading } = useSelector(state => state.purchaseHistory);

  useEffect(() => {
    userInfo && dispatch(fetchUserOrders(authState, userInfo.sub));
  }, [dispatch, authState, userInfo]);

  return <RenderPurchaseHistory orders={orders} loading={loading} />;
}
