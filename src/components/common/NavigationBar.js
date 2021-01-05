import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'antd';
import {
  SearchOutlined,
  PlusCircleOutlined,
  ShoppingCartOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import DropdownMenu from './DropdownMenu';
import { searchByTitle } from '../../state/actions';

const Wrapper = styled.div`
  height: 180px;

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #272d3d;
    color: #fff;

    .top {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 8px 15px;
      flex-direction: row-reverse;
      border-bottom: 1px solid #494949;

      .top-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;

        .cart-icon {
          transition-duration: 0.2s;
          color: #fff;
          font-size: 28px;

          &:hover {
            color: #0688f1;
          }
        }
      }

      .top-left {
        display: flex;
        width: 50%;

        .user-profile {
        }
      }
    }

    .middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      padding: 15px 20px 0 20px;

      .search-bar-wrapper {
        width: 100%;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px 20px;
      margin-top: 15px;
      border-top: 1px solid #494949;

      a {
        color: #fff;
      }

      .create-listing {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
        transition-duration: 0.2s;

        &:hover {
          a,
          svg {
            color: #0688f1;
          }
        }
      }
    }
  }
`;

export default function NavigationBar() {
  const dispatch = useDispatch();
  const { authService } = useOktaAuth();
  const { userInfo } = useSelector(state => state.userInfo);

  return (
    <Wrapper>
      <div className="navbar">
        <div className="top">
          <div className="top-right">
            <DropdownMenu
              title="My Market"
              items={[
                <Link to="/marketplace/buyer/history">Purchase History</Link>,
                'Saved Items',
                'Messages',
              ]}
            />

            <Link to="/marketplace/cart" style={{ marginLeft: '25px' }}>
              <ShoppingCartOutlined className="cart-icon" />
            </Link>
          </div>

          <div className="top-left">
            <div className="user-profile">
              <DropdownMenu
                title={`Hi, ${userInfo.given_name}`}
                items={[
                  <span>Account Settings</span>,
                  <span onClick={() => authService.logout()}>Sign Out</span>,
                ]}
              />
            </div>
          </div>
        </div>

        <div className="middle">
          <div className="search-bar-wrapper">
            <Input
              type="text"
              placeholder="Search MarketPlace"
              onChange={e => dispatch(searchByTitle(e.target.value))}
              style={{ maxWidth: '500px' }}
              addonAfter={<SearchOutlined />}
              suffix={
                <AudioOutlined
                  style={{
                    fontSize: 16,
                    color: '#1890ff',
                  }}
                />
              }
            />
          </div>
        </div>

        <div className="bottom">
          <Link to="/">Home</Link>
          <span>Wishlist</span>
          <span>Products</span>
          <span>Categories</span>

          <section className="create-listing">
            <Link to="/marketplace/create" style={{ marginRight: '8px' }}>
              Create New Listing
            </Link>
            <PlusCircleOutlined />
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
