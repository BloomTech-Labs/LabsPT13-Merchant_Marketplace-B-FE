import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #eff5f3;

  .search-bar-wrapper {
    position: relative;

    input {
      font-size: 15px;
      width: 300px;
      padding: 5px 10px;
      border: none;
      color: black;
    }
    svg {
      position: absolute;
      right: 5px;
      top: 6px;
    }
  }

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
      <span>LOGO</span>

      <div className="search-bar-wrapper">
        <input type="text" placeholder="Search MarketPlace" />
        <BiSearchAlt size="1.6em" />
      </div>
      {/* <FaUserCircle size="2.5em" color="#607d8b" /> */}
      <div className="cart">
        <AiOutlineShoppingCart size="2.5em" color="#4a626e" />
        <span>Cart</span>
      </div>
    </Wrapper>
  );
}
