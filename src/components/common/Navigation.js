import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid red;
  padding: 15px;

  .cart {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-weight: 500;
      font-size: 16px;
    }
  }

  svg {
    /* vertical-align: middle; */
  }
`;

export default function navigation() {
  return (
    <Wrapper>
      {/* <FaUserCircle size="2.5em" color="#607d8b" /> */}
      <div className="cart">
        <AiOutlineShoppingCart size="2.5em" color="#4a626e" />
        <span>Cart</span>
      </div>
    </Wrapper>
  );
}
