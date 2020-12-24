import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Wrapper = styled.div`
  padding-bottom: 20px;

  .products {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default function MarketplaceFeed({ searchTerm }) {
  const { products } = useSelector(state => state.products);
  const searchedProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="products">
        {searchedProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Wrapper>
  );
}
