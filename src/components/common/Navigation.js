import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt, BiChevronDown } from 'react-icons/bi';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #bdcdcf;

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
        padding: 8px;
        border: none;
        color: black;
      }
      svg {
        position: absolute;
        right: 5px;
        top: 10px;
      }
    }

    .cart-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #363636;

      span {
        margin-left: 5px;
        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  .dropdown-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 8px 15px 0;

    section {
      cursor: pointer;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
      }

      &:hover {
        .dropdown-menu {
          display: block;
        }
      }
    }

    .dropdown-menu {
      position: absolute;
      display: none;
      padding: 0;
      background-color: #9db99d;
      list-style-type: none;
      right: 15px;
      top: 120px;
      width: 100px;

      li a {
        display: inline-block;
        width: 100%;
        text-align: end;
        padding: 10px;
        color: #363636;
        font-size: 16px;

        &:hover {
          color: #fff;
          transition-duration: 0.3s;
        }
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

        <Link to="/cart" className="cart-icon">
          <AiOutlineShoppingCart size="2.5em" color="#4a626e" />
          <span>Cart</span>
        </Link>
      </main>

      <div className="dropdown-wrapper">
        <section>
          <FaUserCircle size="2.5em" color="#607d8b" />

          <ul className="dropdown-menu">
            <li>
              <a href="">One</a>
            </li>
            <li>
              <a href="">Two</a>
            </li>
            <li>
              <a href="">Three</a>
            </li>
          </ul>

          <span>Hi, {userInfo.name.split(' ')[0]}</span>
          <BiChevronDown size="2em" id="dropdown-icon" />
        </section>
      </div>
    </Wrapper>
  );
}
