import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { fetchWishlist } from '../../../state/actions';
import { fetchUserInfo } from '../../../state/actions';
import { getProfileData } from '../../../api';

import RenderWishlist from './RenderWishlist';

export default function WishlistContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { userInfo, wishlists } = useSelector(state => state);
  const profile = getProfileData();
  const profile_id = profile.id;

  useEffect(() => {
    let isSubscribed = true;

    !userInfo && dispatch(fetchUserInfo(memoAuthService, isSubscribed));
    !wishlists && dispatch(fetchWishlist(profile_id, authState));

    return () => (isSubscribed = false);
  }, [dispatch, authState, wishlists, memoAuthService, userInfo, profile_id]);

  return (
    <>
      {authState.isAuthenticated && !userInfo ? (
        <LoadingComponent message="...Fetching profile" />
      ) : (
        <RenderWishlist />
      )}
    </>
  );
}
