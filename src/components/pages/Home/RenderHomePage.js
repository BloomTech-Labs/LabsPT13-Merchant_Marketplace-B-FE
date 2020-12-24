import React from 'react';
import { NavigationBar, MarketplaceFeed } from '../../common';

function RenderHomePage({ searchTerm, handleSearchTermChange }) {
  return (
    <>
      <NavigationBar
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />

      <MarketplaceFeed searchTerm={searchTerm} />
    </>
  );
}
export default RenderHomePage;
