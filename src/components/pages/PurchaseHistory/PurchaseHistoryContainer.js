import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../state/actions';
import RenderPurchaseHistory from './RenderPurchaseHistory';

export default function PurchaseHistoryContainer() {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { userInfo } = useSelector(state => state.userInfo);
  const { orders, loading } = useSelector(state => state.purchaseHistory);

  useEffect(() => {
    !orders && dispatch(fetchOrders(authState, userInfo.sub));
  }, [dispatch, orders, userInfo.sub, authState]);

  console.log(orders);

  return loading ? (
    <span>Loading orders...</span>
  ) : (
    <RenderPurchaseHistory orders={orders} />
  );
}
