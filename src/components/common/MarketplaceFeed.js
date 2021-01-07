import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductCardSkeleton from './ProductCardSkeleton';
const LazyProductCard = lazy(() => import('./ProductCard'));

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
  const { products } = useSelector(state => state.products);
  const { searchedTitle } = useSelector(state => state.marketplaceSearch);

  const searchedProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchedTitle.toLowerCase())
  );

  return (
    <Wrapper>
      <div className="products">
        {searchedProducts.map((p, i) => (
          <Suspense key={i} fallback={<ProductCardSkeleton />}>
            <LazyProductCard product={p} />
          </Suspense>
        ))}
      </div>
    </Wrapper>
  );
}
