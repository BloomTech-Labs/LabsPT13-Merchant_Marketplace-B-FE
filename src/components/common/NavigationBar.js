import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import DropdownMenu from './DropdownMenu';
import FormInput from './FormInput';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Icon from './Icon';

const Wrapper = styled.div`
  height: 179px;

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #cdd7d8;
    overflow: hidden;

    .top {
      display: flex;
      align-items: center;
      padding: 8px 15px;
      flex-direction: row-reverse;
      border-bottom: 1px solid #a1a1a1;

      .top-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
      }

      .top-left {
        display: flex;
        width: 50%;

        .user-profile {
        }
      }
    }

    .middle {
      padding: 15px 20px 0 20px;
      text-align: center;
      display: flex;
      align-items: center;

      .search-bar-wrapper {
        width: 100%;
      }

      .add-item {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: #0688f1;

          svg {
            color: #0688f1;
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-evenly;
      height: 50px;
      padding: 15px 20px;
      margin-top: 15px;
      border-top: 1px solid #a1a1a1;

      a {
        color: #111;
        text-decoration: underline;
      }
    }
  }
`;

export default function Navigation() {
  const [input, setInput] = useState('');
  const { authService } = useOktaAuth();
  //  access user info from local storage
  const userInfo = JSON.parse(window.localStorage.getItem('user'));

  return (
    <Wrapper>
      <div className="navbar">
        <div className="top">
          <div className="top-right">
            <DropdownMenu
              title="My Market"
              items={['Purchase History', 'Saved Items', 'Messages']}
            />

            <Link to="/cart" style={{ marginLeft: '25px' }}>
              <Icon
                Icon={<ShoppingCartOutlined />}
                styles={{ fontSize: '28px' }}
              />
            </Link>
          </div>

          <div className="top-left">
            <div className="user-profile">
              <DropdownMenu
                title={'Hi, ' + userInfo.name.split(' ')[0]}
                items={[
                  'Account Settings',
                  <span onClick={() => authService.logout()}>Sign Out</span>,
                ]}
              />
            </div>
          </div>
        </div>

        <div className="middle">
          <div className="search-bar-wrapper">
            <FormInput
              name="search-bar"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Search MarketPlace"
              labelId=""
              Icon={<SearchOutlined />}
              styles={{ maxWidth: '500px' }}
            />
          </div>

          <section className="add-item">
            <span style={{ width: '70px' }}>Add item</span>
            <Icon Icon={<PlusCircleOutlined />} styles={{ fontSize: '24px' }} />
          </section>
        </div>

        <div className="bottom">
          <Link to="/">Home</Link>
          <span>Wishlist</span>
          <span>Products</span>
          <span>Categories</span>
        </div>
      </div>
    </Wrapper>
  );
}
