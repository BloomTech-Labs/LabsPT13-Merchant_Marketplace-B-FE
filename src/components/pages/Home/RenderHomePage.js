import React, { lazy, Suspense } from 'react';
import {
  MarketplaceFeed,
  ProductCardSkeleton,
  NavLoadingSkeleton,
} from '../../common';

const LazyNavigationBar = lazy(() => import('../../common/NavigationBar'));

function RenderHomePage({ userInfo, products }) {
  return (
    <>
      {userInfo ? (
        <Suspense fallback={<NavLoadingSkeleton />}>
          <LazyNavigationBar />
        </Suspense>
      ) : (
        <NavLoadingSkeleton />
      )}

      {userInfo && products ? (
        <MarketplaceFeed />
      ) : (
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[1, 2, 3, 4, 5].map((p, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </section>
      )}
    </>
  );
}
export default RenderHomePage;
