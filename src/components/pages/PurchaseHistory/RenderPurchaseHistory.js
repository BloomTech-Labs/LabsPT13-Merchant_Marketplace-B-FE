import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';

const Wrapper = styled.div``;

export default function RenderPurchaseHistory({ orders, loading }) {
  console.log(orders);

  return loading ? (
    <div>Loading orders...</div>
  ) : (
    <Wrapper>
      <NavigationBar />
    </Wrapper>
  );
}
