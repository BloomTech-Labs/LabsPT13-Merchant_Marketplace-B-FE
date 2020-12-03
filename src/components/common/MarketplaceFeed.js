import React, { useContext } from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import { ProductsContext } from '../../state/contexts';

const Wrapper = styled.div`
  padding: 15px 0 0 0;

  .products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default function MarketplaceFeed() {
  const products = useContext(ProductsContext);

  return (
    <Wrapper>
      <div className="products">
        {products.length ? (
          <>
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}

            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </>
        ) : (
          <h2 style={{ marginTop: '150px' }}>Products loading...</h2>
        )}
      </div>
    </Wrapper>
  );
}
