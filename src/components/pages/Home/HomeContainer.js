import React, { useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, fetchProducts } from '../../../state/actions';
import RenderHomePage from './RenderHomePage';

function HomeContainer() {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { userInfo } = useSelector(state => state.userInfo);
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    let isSubscribed = true;

    !userInfo && dispatch(fetchUserInfo(memoAuthService, isSubscribed));
    dispatch(fetchProducts(authState));

    return () => (isSubscribed = false);
  }, [dispatch, authState, userInfo, memoAuthService]);

  return (
    <>
      {authState.isAuthenticated ? (
        <RenderHomePage userInfo={userInfo} products={products} />
      ) : (
        <div>You must be authenticated to browse.</div>
      )}
    </>
  );
}

export default HomeContainer;
