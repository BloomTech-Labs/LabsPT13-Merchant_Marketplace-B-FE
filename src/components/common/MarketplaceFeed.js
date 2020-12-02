import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductCard from '../common/ProductCard';

const Wrapper = styled.div`
  border: 1px solid red;
  text-align: center;

  .products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default function MarketplaceFeed({ getProducts, LoadingComponent }) {
  const [products, setProducts] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
      .catch(error => {
        console.error(error);
        // Be sure to add functionality that displays errors to your UI here.
        // We want our users to know whether something has gone wrong with our request.
      })
      .finally(() => {
        setFetching(false);
      });
  }, [getProducts]);

  return (
    <Wrapper>
      <h1>Marketplace Feed</h1>
      {isFetching ? (
        <LoadingComponent />
      ) : (
        <div className="products">
          {products.map(p => (
            <ProductCard />
          ))}

          {products.map(p => (
            <ProductCard />
          ))}
        </div>
      )}
    </Wrapper>
  );
}
