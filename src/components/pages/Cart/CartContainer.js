import React, { useEffect} from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../../state/actions';

import RenderCart from './RenderCart';

export default function CartContainer({ LoadingComponent }) {
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  
  const {userInfo} = useSelector(state => state.userInfo);
  const {cart} = useSelector(state => state.carts );
  console.log({userInfo})


  useEffect(() => {

    !cart.length && dispatch(fetchCart(userInfo.sub, authState));

  }, [dispatch, authState, userInfo, cart.length]);

  return (
    <>
      <RenderCart /> 
     
    </>
  );

}
