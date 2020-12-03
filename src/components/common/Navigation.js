import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt, BiChevronDown } from 'react-icons/bi';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #bdcdcf;

  .top {
    display: flex;
    flex-direction: row-reverse;
    padding: 7px 15px;
    border-bottom: 1px solid #939394;

    .top-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 50%;

      .cart-icon {
        cursor: pointer;
        color: #363636;
        margin-left: 25px;

        span {
          font-weight: 500;
          font-size: 16px;
        }
      }

      .dropdown {
        .btn {
          background: transparent;
          border: none;
          color: #111;
          outline: none;
          padding: 0 0 0 5px;
          display: flex;
          align-items: center;
        }
      }
    }

    .top-left {
      display: flex;
      width: 50%;

      .user-profile {
        display: flex;
        align-items: center;

        svg {
          margin-right: 25px;
        }
      }
    }
  }

  .middle {
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
  }
`;

export default function Navigation({ userInfo }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Wrapper>
      <div className="top">
        <div className="top-right">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
              My Market
              <BiChevronDown size="2em" id="dropdown-icon" />
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Link to="/cart" className="cart-icon">
            <AiOutlineShoppingCart size="2.2em" color="#4a626e" />
          </Link>
        </div>

        <div className="top-left">
          <div className="user-profile">
            <FaUserCircle size="2.2em" color="#607d8b" />
            <span>Hi, {userInfo.name.split(' ')[0]}</span>
            <BiChevronDown size="2em" id="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="search-bar-wrapper">
          <input type="text" placeholder="Search MarketPlace" />
          <BiSearchAlt size="1.6em" />
        </div>
      </div>
    </Wrapper>
  );
}
