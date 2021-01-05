import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

export default function RenderPurchaseHistory({ orders, loading }) {
  console.log(orders);

  return loading ? (
    <div>Loading orders...</div>
  ) : (
    <Wrapper>
      <h1>Purchase History</h1>
    </Wrapper>
  );
}
