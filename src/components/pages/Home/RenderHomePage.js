import React from 'react';
import { NavigationBar } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';

function RenderHomePage() {
  return (
    <div>
      <NavigationBar />

      <MarketplaceFeed />
    </div>
  );
}
export default RenderHomePage;
