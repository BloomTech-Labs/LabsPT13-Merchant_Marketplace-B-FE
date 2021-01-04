import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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

export default function RenderCart() {
  const { carts } = useSelector(state => state.cartItems);

  return (
    <Wrapper>
      <NavigationBar />
      
      <CardWrapper>
      
      <div className="productsWrapper">
      {carts.map(p => (
          <CartCard key={p.id} product={p} />
        ))}
      </div>
      <div className="paymentsWrapper">
        <Payments />
      </div>
      </CardWrapper>
    </Wrapper>
  );
};
