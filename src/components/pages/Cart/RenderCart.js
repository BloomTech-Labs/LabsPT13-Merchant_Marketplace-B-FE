import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../../common';
import { CartCard } from '../../common';
import { Payments } from '../../common';

const Wrapper = styled.div`
  
`;
const CardWrapper = styled.div`
  display: flex;
  margin: 0rem 4rem 0rem 4rem;
  
  .productsWrapper {
    padding: 4%;
    margin-left: 3%;
  }
  .paymentsWrapper {
    width: 60%;
    padding-left: 20%;
    padding-right: 10%;
    margin-right: 5%;
  }
`

const RenderCart = () => {
  return (
    <Wrapper>
      <NavigationBar />
      
      <CardWrapper>
      
      <div className="productsWrapper">
        <CartCard />
      </div>
      <div className="paymentsWrapper">
        <Payments />
      </div>
      </CardWrapper>
    </Wrapper>
  );
};

export default RenderCart;
