import React from 'react';

import styled from 'styled-components';
import { Navigation } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';

const Wrapper = styled.div`
  background-color: #ecf0ee;

  .main-content {
    padding: 200px 15px 15px;
  }
`;

function RenderHomePage(props) {
  const { userInfo, authService, getProducts } = props;
  return (
    <Wrapper>
      <Navigation
        userInfo={userInfo}
        handleLogout={() => authService.logout()}
      />

      <div className="main-content">
        <MarketplaceFeed
          getProducts={getProducts}
          LoadingComponent={() => <div>Loading Products...</div>}
        />
      </div>
    </Wrapper>
  );
}
export default RenderHomePage;
