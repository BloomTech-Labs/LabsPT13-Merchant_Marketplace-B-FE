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
  const [fetchingProducts, setFetchingProducts] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const fetchUserInfo = async () => {
      try {
        const userInfo = await memoAuthService.getUser();
        if (isSubscribed) setUserInfo(userInfo);
      } catch (error) {
        isSubscribed = false;
        return setUserInfo(null);
      }
    };

    fetchUserInfo();
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getMarketProducts(authState);
        setProducts(products);
      } catch (error) {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      } finally {
        setFetchingProducts(false);
      }
    };

    fetchProducts();
  }, [authState]);

  return (
    <>
      {authState.isAuthenticated &&
        (!userInfo ? (
          <LoadingComponent message="Fetching user profile..." />
        ) : (
          <UserInfoContext.Provider value={userInfo}>
            <ProductsContext.Provider value={{ products, fetchingProducts }}>
              <RenderHomePage authService={authService} />
            </ProductsContext.Provider>
          </UserInfoContext.Provider>
        ))}
    </>
  );
}

export default HomeContainer;
