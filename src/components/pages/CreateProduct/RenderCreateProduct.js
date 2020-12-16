import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import ImagesUploader from '../../common/ImagesUploader';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f7f7f7;

  .form-wrapper {
    max-width: 600px;
    margin: auto;
    padding: 15px;
    height: 100%;
    border: 1px solid #ecebeb;

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

    .fileUploader {
      .fileContainer {
        background-color: #e6e6e6;
        padding: 10px 0;
        min-height: 170px;

        .chooseFileButton {
          padding: 5px 20px;
        }

        .uploadPictureContainer {
          padding: 5px;
          margin: 15px;

          .deleteImage {
            height: 25px;
            font-size: 18px;
            width: 25px;
            line-height: 25px;
          }
        }
      }
    }

    .ant-input-affix-wrapper,
    .ant-select {
      margin: 6px 0;
    }
  }
`;

export default function RenderCreateProduct({
  userInfo,
  formInfo,
  onDropImages,
  handleChange,
  handleSubmit,
}) {
  const { title, price } = formInfo;
  const { Option } = Select;
  const { TextArea } = Input;

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
        <ImagesUploader onDropImages={onDropImages} />

        <Input
          name="title"
          value={title}
          placeholder="Title"
          onChange={e => handleChange(e.target.name, e.target.value)}
          allowClear={true}
        />

        <Input
          value={price}
          name="price"
          type="number"
          placeholder="Price"
          onChange={e => handleChange(e.target.name, e.target.value)}
          suffix="$"
        />

        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Category"
          onChange={value => handleChange('category', value)}
        >
          <Option value="Electronics">Electronics</Option>
          <Option value="Furniture">Furniture</Option>
          <Option value="Books">Books</Option>
        </Select>

        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Condition"
          onChange={value => handleChange('condition', value)}
        >
          <Option value="New">New</Option>
          <Option value="Used - Like New">Used - Like New</Option>
          <Option value="Used - Good">Used - Good</Option>
          <Option value="Used - Fair">Used - Fair</Option>
        </Select>

        <TextArea
          placeholder="Description"
          name="description"
          autoSize={{ minRows: 6, maxRows: 6 }}
          onChange={e => handleChange(e.target.name, e.target.value)}
          allowClear={true}
        />
      </div>
    </Wrapper>
  );
}
