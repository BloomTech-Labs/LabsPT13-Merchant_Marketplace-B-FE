import React from 'react';

import styled from 'styled-components';
import { NavigationBar } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';

const Wrapper = styled.div`
  background-color: #ecf0ee;

  .main-content {
    padding: 180px 15px 15px;
  }
`;

function RenderHomePage(props) {
  const { userInfo, authService, getProducts } = props;

  return (
    <Wrapper>
      <NavigationBar
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
