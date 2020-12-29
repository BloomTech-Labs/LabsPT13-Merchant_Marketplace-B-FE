import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';
import { CartCard } from '../../common';
import { Payments } from '../../common';

const Wrapper = styled.div``;

const RenderCart = () => {
  return (
    <Wrapper>
      <NavigationBar />

      <h1>Cart Page</h1>
      <div className="productsWrapper">
        <CartCard />
      </div>
      <div className="paymentsWrapper">
        <Payments />
      </div>
    </Wrapper>
  );
};

export default RenderCart;
