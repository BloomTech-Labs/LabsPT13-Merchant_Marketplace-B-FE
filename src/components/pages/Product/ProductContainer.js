import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useLocation, useParams } from 'react-router-dom';
import { getProductById } from '../../../api';
import RenderProduct from './RenderProduct';

export default function ProductContainer() {
  const { authState } = useOktaAuth();
  const { product } = useLocation();
  const [productInfo, setProductInfo] = useState(product);
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
  }, [id, productInfo]);

  return (
    <>
      {productInfo ? (
        <RenderProduct product={productInfo} />
      ) : (
        <span>...Fetching product info</span>
      )}
    </>
  );
}
