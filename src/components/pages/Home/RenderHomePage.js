import React, { lazy, Suspense } from 'react';
import { NavigationBar, MarketplaceFeed, LoadingComponent } from '../../common';
import LoadingSkeleton from '../../common/LoadingSkeleton';

const LazyNavigationBar = lazy(() => import('../../common/NavigationBar'));

function RenderHomePage({ userInfo, products }) {
  return (
    <>
      {!userInfo && products.length ? (
        <>
          <Suspense fallback={<LoadingSkeleton />}>
            <LazyNavigationBar />
          </Suspense>

          <MarketplaceFeed />
        </>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
}
export default RenderHomePage;
