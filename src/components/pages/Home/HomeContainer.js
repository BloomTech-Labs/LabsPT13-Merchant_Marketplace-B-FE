import React, { useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../state/actions';
import { fetchUserInfo } from '../../../state/actions';
import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { userInfo, products } = useSelector(state => state);

  useEffect(() => {
    let isSubscribed = true;

    !userInfo && dispatch(fetchUserInfo(memoAuthService, isSubscribed));
    !products.length && dispatch(fetchProducts(authState));

    return () => (isSubscribed = false);
  }, [dispatch, authState, userInfo, products.length, memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo ? (
        <LoadingComponent message="...Fetching profile" />
      ) : (
        <RenderHomePage />
      )}
    </>
  );
}

export default HomeContainer;
