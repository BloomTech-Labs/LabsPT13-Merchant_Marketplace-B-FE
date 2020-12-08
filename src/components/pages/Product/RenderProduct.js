import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import { MessageFilled, ArrowLeftOutlined } from '@ant-design/icons';

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
    background-color: rgba(30, 39, 51, 0.6);
    border-radius: 50%;
    transition-duration: 0.3s;

    &:hover {
      color: #337ab7;
      background: #fff;
    }
  }

  .main {
    display: flex;
    position: fixed;
    align-items: center;
    align-self: flex-start;
    width: calc(100% - 360px);
    height: 100%;

    .carousel-wrapper {
      width: 100%;

      svg {
        height: 100px;
        width: 45px;
      }

      img {
        object-fit: cover;
      }
    }
  }

  .details-wrapper {
    width: 360px;
    align-self: flex-end;
    border-left: 1px solid #bbbbbb;

    .navbar {
      height: 50px;
      width: 100%;
    }

    .nav-wrapper {
      height: 50px;

      .navbar {
        position: fixed;
        top: 0;
        border-bottom: 1px solid #d6d5d5;
        background-color: #c4dbe0;
      }
    }

    .details {
      padding: 10px 15px;

      .navbar {
        background-color: #c4dbe0;
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

      #details {
        font-size: 20px;
        margin: 0;
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
        border-radius: 10px;
        cursor: pointer;

        &:hover {
          background-color: #445261;
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
        border: 1px solid;
        margin-bottom: 30px;
      }
    }

    .message-seller-wrapper {
      height: 150px;

      .message-seller {
        background-color: #c4dbe0;
        position: fixed;
        bottom: 0;
        width: 360px;
        padding: 15px;

        .message-input {
          display: flex;
          flex-direction: column;
          margin-top: 5px;
          font-size: 16px;

          input {
            border: 1px solid gray;
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
              background-color: #529cfd;
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

      <div className="main">
        <ImageGallery
          items={images}
          showPlayButton={false}
          additionalClass="carousel-wrapper"
        />
      </div>

      <div className="details-wrapper">
        <div className="nav-wrapper">
          <div className="navbar"></div>
        </div>

        <div className="details">
          <h2>4K ultra hd 55 LED Insigna Roku TV</h2>
          <h3>${product.price}</h3>
          <a href="google.com">{product.category}</a>
          <div>
            Listed 2 hours ago in <a href="google.com">Alameda, CA</a>
          </div>

          <div className="navbar"></div>

          <h4 id="details">Details</h4>
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
