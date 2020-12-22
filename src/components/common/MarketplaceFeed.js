import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { ProductsContext } from '../../state/contexts';

const Wrapper = styled.div`
  padding-bottom: 20px;

  .products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default function MarketplaceFeed() {
  const products = useContext(ProductsContext);
  let img = products[5] && products[5].images[0].image;

  return (
    <Wrapper>
      <div className="products">
        {products.map(p => (
          <>
            {p.images.length ? (
              <img src={`data:${p.images[0].type};base64,${img.data}`} />
            ) : (
              <ProductCard key={p.id} product={p} />
            )}
          </>
        ))}

        {/* {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))} */}
      </div>
    </Wrapper>
  );
}
