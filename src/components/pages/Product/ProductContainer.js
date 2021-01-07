import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSellerInfo } from '../../../state/actions';
import RenderProduct from './RenderProduct';
import { addToWishlist } from '../../../api';

export default function ProductContainer() {
  const { authState } = useOktaAuth();
  const [message, setMessage] = useState('Is this available?');
  const [saved, setSaved] = useState(false);
  const { selectedProduct } = useSelector(state => state);
  const { sellerInfo } = useSelector(state => state.sellerInfo);
  const { userInfo } = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  console.log({ sellerInfo });
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
    const profile_id = userInfo.sub;
    const body = { profile_id, product_id: selectedProduct.id };
    setSaved(true);

    addToWishlist(body, authState)
      .then(res => {
        console.log({ res });
      })
      .catch(err => {
        console.error(err);
      });
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
