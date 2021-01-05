import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderProduct from './RenderProduct';

export default function ProductContainer() {
  const [message, setMessage] = useState('Is this available?');
  const [saved, setSaved] = useState(false);
  const { selectedProduct } = useSelector(state => state);
  const { userInfo } = useSelector(state => state.userInfo);

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
        sellerInfo={userInfo}
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
