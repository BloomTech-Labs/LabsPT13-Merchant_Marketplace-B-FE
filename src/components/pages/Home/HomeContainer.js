import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getMarketProducts } from '../../../api';
import RenderHomePage from './RenderHomePage';
import { ProductsContext } from '../../../state/contexts';
import { useLocalStorage } from 'react-use';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);
  const [user, setUser] = useLocalStorage('user', null);
  // set user info state from local storage
  const [userInfo, setUserInfo] = useState(user);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchUserInfo = async () => {
      try {
        const userInfo = await memoAuthService.getUser();
        if (isSubscribed) {
          // update user info in local storage
          setUser(userInfo);
          setUserInfo(userInfo);
        }
      } catch (error) {
        isSubscribed = false;
        return setUserInfo(null);
      }
    };

    // only fetch if user info is not in local storage
    !userInfo && fetchUserInfo();
    return () => (isSubscribed = false);
  }, [memoAuthService, userInfo, setUser]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getMarketProducts(authState);
        setProducts(products);
      } catch (error) {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      }
    };

    fetchProducts();
  }, [authState]);

  return (
    <>
      {authState.isAuthenticated &&
        (!userInfo ? (
          <LoadingComponent message="...Fetching profile" />
        ) : (
          <ProductsContext.Provider value={products}>
            <RenderHomePage />
          </ProductsContext.Provider>
        ))}
    </>
  );
}

export default HomeContainer;
