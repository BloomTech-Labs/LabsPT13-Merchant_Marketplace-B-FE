import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';
import { ProductsContext, UserInfoContext } from '../../../state/contexts';

const Wrapper = styled.div`
  background-color: #ecf0ee;

  .main-content {
    padding: 180px 15px 15px;
  }
`;

function RenderHomePage(props) {
  const { authService } = props;

  return (
    <UserInfoContext.Consumer>
      {userInfo => (
        <ProductsContext.Consumer>
          {({ products, fetchingProducts }) => (
            <Wrapper>
              <NavigationBar
                userInfo={userInfo}
                handleLogout={() => authService.logout()}
              />

              <div className="main-content">
                {fetchingProducts ? (
                  <span>Fetching market products...</span>
                ) : (
                  <ProductsContext.Provider value={products}>
                    <MarketplaceFeed
                      LoadingComponent={() => <div>Loading Products...</div>}
                    />
                  </ProductsContext.Provider>
                )}
              </div>
            </Wrapper>
          )}
        </ProductsContext.Consumer>
      )}
    </UserInfoContext.Consumer>
  );
}
export default RenderHomePage;
