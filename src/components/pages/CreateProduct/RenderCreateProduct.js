import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeftOutlined } from '@ant-design/icons';
import PhotosUploader from '../../common/PhotosUploader';

const Wrapper = styled.div`
  height: 100vh;

  .form-wrapper {
    max-width: 700px;
    margin: auto;
    padding: 15px;
    height: 100%;
    border: 1px solid;

    .user-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 70px;
      margin-bottom: 15px;

      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      .info {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-weight: bold;
        font-size: 16px;

        span {
          font-weight: normal;
          font-size: 14px;
        }
      }
    }

    .photos-upload {
      border: 1px solid;
      height: 130px;
      border-radius: 3px;
      cursor: pointer;
    }

    .fileUploader {
      .fileContainer {
        background-color: #e6e6e6;
      }

      .uploadPictureContainer {
        padding: 5px;
        margin: 15px;
      }
    }
  }
`;

export default function RenderCreateProduct({ userInfo }) {
  return (
    <Wrapper>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>

      <div className="form-wrapper">
        <section className="user-info">
          <img
            src="https://www.mercurynews.com/wp-content/uploads/2020/04/slowstreets417.jpg"
            alt="seller avatar"
          />
          <section className="info">
            {userInfo.name}
            <span style={{ color: 'gray' }}>Listing to Marketplace</span>
          </section>
        </section>

        <span>Photos - 0/5 - You can add up to 5 photos.</span>
        <PhotosUploader />
      </div>
    </Wrapper>
  );
}
