import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { getProductById } from '../../../api';

import RenderCart from './RenderCart';

export default function CartContainer() {
  const { authState } = useOktaAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        //const product = await getProductById(id, authState);
        //setProductInfo(product);
      } catch (error) {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      }
    };
  }, []);

  return (
    <div>
      <RenderCart />
    </div>
  );
}
