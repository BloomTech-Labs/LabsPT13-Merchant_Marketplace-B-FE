import React from 'react';
import styled from 'styled-components';
import { CartCard } from '../../common';
import { OrderSummary } from '../../common';


const Wrapper = styled.div`
  
`;
const InfoWrapper = styled.div`
  display: flex;
  margin: 0rem 4rem 0rem 4rem;
  
`;
const OrderSummaryWrapper = styled.div`

`;

const RenderCheckout = () => {
  return (
    <Wrapper>
      <InfoWrapper>
      
      </InfoWrapper>
      <OrderSummaryWrapper>
          <h3> Order Summary</h3>
          <OrderSummary />
          <div> Items </div>

      </OrderSummaryWrapper>
      
      
    </Wrapper>
  );
};

export default RenderCart;
