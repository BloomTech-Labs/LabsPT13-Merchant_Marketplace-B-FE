import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist } from '../../../state/actions';

import RenderWishlist from './RenderWishlist';

export default function WishlistContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const { userInfo } = useSelector(state => state.userInfo);

  console.log({ userInfo });

  useEffect(() => {
    dispatch(fetchWishlist(authState, userInfo.sub));
  }, [dispatch, authState, userInfo.sub]);
  return <RenderWishlist />;
}
