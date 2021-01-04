import React, { useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../../state/actions';
import { fetchUserInfo } from '../../../state/actions';
import { getProfileData } from '../../../api'

import RenderCart from './RenderCart';

export default function CartContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { userInfo, cart } = useSelector(state => state);
  const profile = getProfileData()

  console.log(profile)
  const profile_id = profile.id



  useEffect(() => {
    let isSubscribed = true;

    !userInfo && dispatch(fetchUserInfo(memoAuthService, isSubscribed));
    !cart && dispatch(fetchCart(profile_id, authState));

    return () => (isSubscribed = false);
  }, [dispatch, authState, userInfo, cart, memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo ? (
        <LoadingComponent message="...Fetching profile" />
      ) : (
        <RenderCart />
      )}
    </>
  );

}
