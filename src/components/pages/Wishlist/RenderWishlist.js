import React from 'react';
import styled from 'styled-components';
import WishListCard from '../../common/WishListCard';
import { NavigationBar } from '../../common';

const Wrapper = styled.div``;

const RenderWishlist = () => {
  return (
    <Wrapper>
      <h1 style={{ marginTop: '160px' }}>Wishlist Page</h1>
      <WishListCard />
    </Wrapper>
  );
};
export default RenderWishlist;
