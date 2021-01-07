import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSellerInfo } from '../../../state/actions';
import RenderProduct from './RenderProduct';

export default function ProductContainer() {
  const { authState } = useOktaAuth();
  const [message, setMessage] = useState('Is this available?');
  const [saved, setSaved] = useState(false);
  const { sellerInfo } = useSelector(state => state.sellerInfo);
  const { selectedProduct } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // only fetch for seller info if selected product belongs to different seller
    if (sellerInfo) {
      if (sellerInfo.id !== selectedProduct.profile_id) {
        dispatch(fetchSellerInfo(authState, selectedProduct.profile_id));
      }
    } else {
      dispatch(fetchSellerInfo(authState, selectedProduct.profile_id));
    }
  }, [dispatch, authState, sellerInfo, selectedProduct.profile_id]);

  const saveMessage = e => setMessage(e.target.value);

  const saveProduct = () => {
    setSaved(true);
    console.log('ADD PRODUCT TO WISHLIST');
  };

  const unSaveProduct = () => {
    setSaved(false);
    console.log('REMOVE PRODUCT FROM WISHLIST');
  };

  const sendMessage = () => {
    console.log('Send message');

    setMessage('Is this available?');
  };

  return (
    <>
      <RenderProduct
        sellerInfo={sellerInfo}
        product={selectedProduct}
        message={message}
        saved={saved}
        saveMessage={saveMessage}
        saveProduct={saveProduct}
        unSaveProduct={unSaveProduct}
        sendMessage={sendMessage}
      />
    </>
  );
}
