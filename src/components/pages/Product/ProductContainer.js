import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RenderProduct from './RenderProduct';

export default function ProductContainer() {
  const [message, setMessage] = useState('Is this available?');
  const [saved, setSaved] = useState(false);
  const { product } = useLocation();

  const { userInfo } = useSelector(state => state.userInfoReducer);

  console.log({ userInfo });

  // persist product info via local storage on the first render only
  product &&
    window.localStorage.setItem('product_info', JSON.stringify(product));

  const sellerInfo = JSON.parse(window.localStorage.getItem('user_info'));
  const productInfo = JSON.parse(window.localStorage.getItem('product_info'));

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
        product={productInfo}
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
