import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../../../api';
import RenderProduct from './RenderProduct';

export default function ProductContainer() {
  const { authState } = useOktaAuth();
  const { product } = useLocation();
  const [productInfo, setProductInfo] = useState(product);

  const sellerInfo = JSON.parse(window.localStorage.getItem('user'));
  const [message, setMessage] = useState('Is this available?');
  const [saved, setSaved] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id, authState);
        setProductInfo(product);
      } catch (error) {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      }
    };

    // only fetch if product info is not passed via Link
    if (!productInfo) fetchProduct();
  }, [id, productInfo, authState]);

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
      {productInfo ? (
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
      ) : (
        <span>...Fetching product info</span>
      )}
    </>
  );
}
