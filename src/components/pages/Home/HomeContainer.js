import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../state/actions';
import RenderHomePage from './RenderHomePage';
import { useLocalStorage } from 'react-use';
import { fetchUserInfo } from '../../../state/actions';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);
  const [user, setUser] = useLocalStorage('user', null);
  // set user info state from local storage
  // const [userInfo, setUserInfo] = useState(user);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productsReducer);

  useEffect(() => {
    let isSubscribed = true;

    dispatch(fetchUserInfo(memoAuthService, isSubscribed));

    // const fetchUserInfo = async () => {
    //   try {
    //     const userInfo = await memoAuthService.getUser();
    //     if (isSubscribed) {
    //       // update user info in local storage
    //       setUser(userInfo);
    //       setUserInfo(userInfo);
    //     }
    //   } catch (error) {
    //     isSubscribed = false;
    //     return setUserInfo(null);
    //   }
    // };

    // // only fetch if user info is not in local storage
    // !userInfo && fetchUserInfo();
    return () => (isSubscribed = false);
  }, []);

  useEffect(() => {
    !products.length && dispatch(fetchProducts(authState));
  }, [dispatch, authState, products.length]);

  return (
    <>
      {authState.isAuthenticated && <RenderHomePage />

      /* (!userInfo ? (
          <LoadingComponent message="...Fetching profile" />
        ) : (
        ))} */
      }
    </>
  );
}

export default HomeContainer;
