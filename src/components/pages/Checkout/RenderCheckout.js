import React from 'react';
import styled from 'styled-components';
import { CartCard } from '../../common';
import { OrderSummary } from '../../common';
import { ContactInfo } from '../../common';
import { ShippingInfo } from '../../common';

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
          <h3> 1 - Contact Info </h3>
            <ContactInfo />
          <h3> 2 - Shipping Info </h3>
            <ShippingInfo />
          <h3> 3 - Payment Method </h3>

          <h3> 4 - Billing Address </h3>

          <button> PLACE ORDER </button>
      
      </InfoWrapper>
      <OrderSummaryWrapper>
          <h4> Order Summary </h4>
          <OrderSummary />
          <div> Items </div>
          <CartCard />

      </OrderSummaryWrapper>
      
      
    </Wrapper>
  );
};

export default RenderCheckout;
