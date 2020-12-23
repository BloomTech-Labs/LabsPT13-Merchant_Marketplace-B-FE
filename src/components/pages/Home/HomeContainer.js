import React, { useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../state/actions';
import RenderHomePage from './RenderHomePage';
import { fetchUserInfo } from '../../../state/actions';

function HomeContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  const { products } = useSelector(state => state.productsReducer);
  const { userInfo } = useSelector(state => state.userInfoReducer);

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
