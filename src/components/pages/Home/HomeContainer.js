import React, { useEffect, useMemo, lazy, Suspense } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../state/actions';
import { fetchUserInfo } from '../../../state/actions';
import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { userInfo } = useSelector(state => state.userInfo);
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    let isSubscribed = true;

    !userInfo && dispatch(fetchUserInfo(memoAuthService, isSubscribed));
    !products.length && dispatch(fetchProducts(authState));

    return () => (isSubscribed = false);
  }, [dispatch, authState, userInfo, products.length, memoAuthService]);

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
