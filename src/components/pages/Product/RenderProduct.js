import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Divider, Tooltip } from 'antd';
import {
  MessageFilled,
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import ImagesGallery from '../../common/ImageGallery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .anticon-arrow-left {
    position: fixed;
    top: 15px;
    left: 15px;
    font-size: 30px;
    z-index: 99;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    background-color: rgba(37, 51, 97, 0.7);
    border-radius: 50%;
    transition-duration: 0.3s;

    &:hover {
      color: #337ab7;
      background: #fff;
    }
  }

  .details-wrapper {
    width: 360px;
    align-self: flex-end;
    border-left: 1px solid #394b86;

    .navbar {
      height: 70px;
      background-color: #394b86;
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
          font-size: 28px;
          color: #fff;
          cursor: pointer;
        }

        .button {
          padding: 3px 13px 3px 8px;
          background-color: #e2e2e2;
          border-radius: 3px;
          cursor: pointer;

          svg {
            color: #2d88ff;
          }

          span {
            vertical-align: middle;
            margin-left: 5px;
          }

          &:hover {
            background-color: #f8f8f8;
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
        padding: 3px 7px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background-color: #394b86;
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
        height: 70px;
        border: 1px solid #394b86;
        margin-bottom: 30px;
      }
    }

    .message-seller-wrapper {
      height: 150px;

      .message-seller {
        position: fixed;
        bottom: 0;
        width: 360px;
        padding: 15px;
        background-color: #394b86;

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
            border-radius: 7px;

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

const RenderProduct = ({ product }) => {
  const images = new Array(3).fill({
    original: product.img,
    thumbnail: product.img,
  });

  const [message, setMessage] = useState('Is this available?');

  const handleChange = e => setMessage(e.target.value);
  const handleFocus = e => e.target.select();

  const sendMessage = () => {
    console.log({ message });
    // disable send button and send message

    setMessage('Is this available');
  };

  return (
    <Wrapper>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>

      <ImagesGallery images={images} />

      <div className="details-wrapper">
        <div className="nav-wrapper">
          <div className="navbar">
            <div className="button">
              <MessageFilled />
              <span>Message</span>
            </div>

            <Tooltip placement="bottom" title="Save" color="#29577c">
              <HeartOutlined />
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
          {product.tags.split(',').map((t, i) => (
            <span id="tag" key={i}>
              {t}
            </span>
          ))}

          <div className="map-wrapper">
            <div className="map"></div>

            <h4>Alameda, CA</h4>
            <span>Location is approximate</span>
            <Divider style={{ margin: '8px 0 0 0' }} />
          </div>

          <h3>Seller Information</h3>
          <div className="seller-info"></div>
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
                onChange={handleChange}
                onFocus={handleFocus}
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
