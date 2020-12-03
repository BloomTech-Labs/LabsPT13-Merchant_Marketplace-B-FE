import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getMarketProducts } from '../../../api';
import RenderHomePage from './RenderHomePage';
import { UserInfoContext, ProductsContext } from '../../../state/contexts';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);

  const [userInfo, setUserInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) setUserInfo(info);
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });

    getMarketProducts(authState)
      .then(res => {
        setProducts(res);
      })
      .catch(error => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });

    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}

      {authState.isAuthenticated && userInfo && (
        <UserInfoContext.Provider value={userInfo}>
          <ProductsContext.Provider value={products}>
            <RenderHomePage authService={authService} />
          </ProductsContext.Provider>
        </UserInfoContext.Provider>
      )}
    </>
  );
}

export default HomeContainer;
