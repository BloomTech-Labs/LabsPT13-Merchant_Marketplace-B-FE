import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Divider, Tooltip } from 'antd';
import {
  MessageFilled,
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { ImagesGallery } from '../../common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .details-wrapper {
    width: 360px;
    align-self: flex-end;
    border-left: 1px solid #2a375a;

    .navbar {
      height: 70px;
      background-color: #2a375a;
    }

    .nav-wrapper {
      height: 80px;

      .navbar {
        position: fixed;
        top: 0;
        width: 360px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        svg {
          font-size: 26px;
          color: #fff;
          cursor: pointer;
        }

        .button {
          padding: 3px 13px 3px 8px;
          background-color: #2d88ff;
          color: #fff;
          border-radius: 3px;
          cursor: pointer;

          svg {
            font-size: 22px;
          }

          span {
            vertical-align: middle;
            margin-left: 5px;
          }

          &:hover {
            background-color: #4594fa;
          }
        }
      }
    }

    .details {
      padding: 10px 15px;

      .navbar {
        margin: 8px 0 15px 0;
      }

      h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        line-height: 30px;
      }
      h3 {
        margin: 3px 0;
        font-weight: 500;
        letter-spacing: 0;
      }

      h4 {
        font-size: 15px;
      }

      h5 {
        font-size: 20px;
        margin: 30px 0 0 0;
      }

      section {
        display: flex;
        justify-content: space-between;
      }

      a {
        color: inherit;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        margin: 15px 0 20px 0;
      }

      #tag {
        display: inline-block;
        margin: 2px 5px 2px 0;
        border: 1px solid gray;
        padding: 1px 7px;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
          background-color: #2a375a;
          color: #fff;
        }
      }

      .map-wrapper {
        margin: 15px 0;

        .map {
          border-radius: 10px;
          height: 150px;
          background-image: url('https://www.mercurynews.com/wp-content/uploads/2020/04/slowstreets417.jpg');
          background-size: cover;
          cursor: pointer;
        }

        h4 {
          margin: 3px 0 0 0;
        }
      }

      .seller-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 70px;
        margin-bottom: 30px;

        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          object-fit: cover;

          &:hover {
            opacity: 0.85;
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          a {
            font-size: 16px;
            margin: 0;
            font-weight: 600;
          }
        }
      }
    }

    .message-seller-wrapper {
      height: 140px;

      .message-seller {
        position: fixed;
        bottom: 0;
        width: 360px;
        padding: 15px;
        background-color: #2a375a;

        span {
          color: #fff;
        }

        .message-input {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
          font-size: 16px;

          input {
            border: 1px solid #bbbbbb;
            padding: 4px 10px;
            outline: none;
            border-radius: 5px;

            &::selection {
              background-color: #2d88ff;
            }
          }

          button {
            margin-top: 15px;
            padding: 7px 0;
            border: none;
            background-color: #2d88ff;
            color: #fff;
            border-radius: 7px;
            font-weight: 600;
            cursor: pointer;
            outline: none;

            &:hover {
              background-color: #4391f7;
            }
          }
        }
      }
    }
  }
`;

const RenderProduct = ({
  sellerInfo,
  product,
  message,
  saved,
  saveMessage,
  saveProduct,
  unSaveProduct,
  sendMessage,
}) => {
  return (
    <Wrapper>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>

      <ImagesGallery images={product.images} />

      <div className="details-wrapper">
        <div className="nav-wrapper">
          <div className="navbar">
            <div className="button">
              <MessageFilled />
              <span>Message</span>
            </div>

            <Tooltip placement="bottom" title="Save" color="#29577c">
              <div onClick={saved ? unSaveProduct : saveProduct}>
                {saved ? <HeartFilled /> : <HeartOutlined />}
              </div>
            </Tooltip>

            <Tooltip placement="bottom" title="Add to cart" color="#29577c">
              <ShoppingCartOutlined />
            </Tooltip>
          </div>
        </div>

        <div className="details">
          <h2>4K ultra hd 55 LED Insigna Roku TV</h2>
          <h3>${product.price}</h3>
          <a href="google.com">{product.category}</a>
          <div>
            Listed 2 hours ago in <a href="google.com">Alameda, CA</a>
          </div>

          <h5>Details</h5>
          <Divider style={{ margin: '4px 0 15px 0' }} />

          <section>
            <h4>Condition</h4>
            <span>{product.condition}</span>
          </section>
          <section>
            <h4>Brand</h4>
            <span>{product.brand}</span>
          </section>

          <p>{product.description}</p>

          <h4>Tags</h4>
          {product.tags.split(',').map((tag, i) => (
            <span id="tag" key={i}>
              {tag}
            </span>
          ))}

          <div className="map-wrapper">
            <div className="map"></div>

            <h4>Alameda, CA</h4>
            <span>Location is approximate</span>
            <Divider style={{ margin: '8px 0 0 0' }} />
          </div>

          <h3>Seller Information</h3>
          <div className="seller-info">
            <a href="google.com" alt="user avatar">
              <img
                src="https://www.mercurynews.com/wp-content/uploads/2020/04/slowstreets417.jpg"
                alt="seller avatar"
              />
            </a>

            <section className="info">
              <Link to={`/marketplace/seller/${sellerInfo.name}`}>
                {sellerInfo.name}
              </Link>
              <span style={{ color: 'gray' }}>Joined MMP in 2020</span>
            </section>
          </div>
        </div>

        <div className="message-seller-wrapper">
          <div className="message-seller">
            <MessageFilled
              style={{
                color: '#2d88ff',
                marginRight: '10px',
                fontSize: '22px',
              }}
            />

            <span>Send seller a message</span>

            <div className="message-input">
              <input
                type="text"
                value={message}
                onChange={saveMessage}
                onFocus={e => e.target.select()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RenderProduct;
