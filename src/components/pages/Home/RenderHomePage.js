import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';

const Wrapper = styled.div`
  background-color: #ecf0ee;

  .main-content {
    padding: 15px;
  }
`;

function RenderHomePage() {
  return (
    <Wrapper>
      <NavigationBar />

      <div className="main-content">
        <MarketplaceFeed />
      </div>
    </Wrapper>
  );
}
export default RenderHomePage;
