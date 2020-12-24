import React from 'react';
import { NavigationBar, MarketplaceFeed } from '../../common';

function RenderHomePage({ searchTerm, handleSearchTermChange }) {
  return (
    <>
      <NavigationBar />

      <MarketplaceFeed />
    </>
  );
}
export default RenderHomePage;
