import React from 'react';
import styled from 'styled-components';
import WishlistCard from '../../common/WishlistCard';
import { NavigationBar } from '../../common';

const Wrapper = styled.div``;

const RenderWishlist = () => {
  return (
    <Wrapper>
      <h1 style={{ marginTop: '160px' }}>Wishlist Page</h1>
      <WishlistCard />
    </Wrapper>
  );
};

export default RenderWishlist;
