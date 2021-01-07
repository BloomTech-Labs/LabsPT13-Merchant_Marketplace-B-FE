import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrders } from '../../../state/actions';
import RenderPurchaseHistory from './RenderPurchaseHistory';

export default function PurchaseHistoryContainer() {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { userInfo } = useSelector(state => state.userInfo);
  const { orders, loading } = useSelector(state => state.purchaseHistory);
  const [action, setAction] = useState('');

  const handleAction = e => {
    setAction(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserOrders(authState, userInfo.sub));
  }, [dispatch, authState, userInfo.sub]);

  return (
    <RenderPurchaseHistory
      orders={orders}
      loading={loading}
      handleAction={handleAction}
    />
  );
}
