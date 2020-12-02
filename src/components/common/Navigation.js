import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt, BiChevronDown } from 'react-icons/bi';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #deebe6;

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    .search-bar-wrapper {
      position: relative;
      top: 30px;

      input {
        font-size: 15px;
        width: 400px;
        padding: 10px;
        border: none;
        color: black;
      }
      svg {
        position: absolute;
        right: 5px;
        top: 10px;
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
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 8px 15px 0;

    section {
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }
`;

export default function navigation({ userInfo }) {
  return (
    <Wrapper>
      <main>
        <span>LOGO</span>

        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search MarketPlace" />
          <BiSearchAlt size="1.6em" />
        </div>

        <div className="cart">
          <AiOutlineShoppingCart size="2.5em" color="#4a626e" />
          <span>Cart</span>
        </div>
      </main>

      <div className="navigation">
        <section>
          <FaUserCircle size="2.5em" color="#607d8b" />
          <span>Hi, {userInfo.name.split(' ')[0]}</span>
          <BiChevronDown size="2em" />
        </section>
      </div>
    </Wrapper>
  );
}
