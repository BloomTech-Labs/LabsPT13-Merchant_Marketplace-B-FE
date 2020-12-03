import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';
import MarketplaceFeed from '../../common/MarketplaceFeed';
import { ProductsContext } from '../../../state/contexts';

const Wrapper = styled.div`
  background-color: #ecf0ee;

  .main-content {
    padding: 180px 15px 15px;
  }
`;

function RenderHomePage() {
  return (
    <ProductsContext.Consumer>
      {products => (
        <Wrapper>
          <NavigationBar />

          <div className="main-content">
            {products.length ? (
              <ProductsContext.Provider value={products}>
                <MarketplaceFeed
                  LoadingComponent={() => <div>Loading Products...</div>}
                />
              </ProductsContext.Provider>
            ) : (
              <span>Fetching market products...</span>
            )}
          </div>
        </Wrapper>
      )}
    </ProductsContext.Consumer>
  );
}
export default RenderHomePage;
