import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Select, Tag } from 'antd';
import ImagesUploader from '../../common/ImagesUploader';

const Wrapper = styled.div`
  background-color: #f7f7f7;

  form {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #fff;

    label {
      font-size: 13px;
      color: #b0b3b8;
      display: block;
    }

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

    .tags-wrapper {
      margin-top: 10px;
      border: 1px solid #d9d9d9;
      border-radius: 2px;

      .tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px;

        span {
          display: inline-block;
          padding: 2px 7px;
          border: 1px solid gray;
          cursor: pointer;
          border-radius: 3px;
          margin: 5px 5px 5px 0;

          &:hover {
            background-color: #2a375a;
            color: #fff;
          }
        }
      }

      input {
        padding: 10px;
        border: none;
      }
    }

    .submit-btn {
      margin: 20px 0;
    }
  }
`;

export default function RenderCreateProduct({
  userInfo,
  formInfo,
  onDropImages,
  handleChange,
  handleSubmit,
  handleKeyPress,
  handleTagChange,
  newTag,
  addTag,
  removeTag,
}) {
  const {
    title,
    price,
    brand,
    description,
    category,
    condition,
    delivery_method,
    tags,
  } = formInfo;
  const { Option } = Select;
  const { TextArea } = Input;

  return (
    <Wrapper>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>

      <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
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
          required
        />

        <Input
          name="brand"
          value={brand}
          placeholder="Brand"
          onChange={e => handleChange(e.target.name, e.target.value)}
          allowClear={true}
          style={{ marginBottom: 0 }}
        />
        <label htmlFor="brand">Optional</label>

        <Input
          value={price}
          name="price"
          type="number"
          placeholder="Price"
          onChange={e => handleChange(e.target.name, e.target.value)}
          suffix="$"
          required
        />

        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Category"
          onChange={value => handleChange('category', value)}
          required
        >
          <Option disabled value={category}>
            Category
          </Option>
          <Option value="Electronics">Electronics</Option>
          <Option value="Furniture">Furniture</Option>
          <Option value="Books">Books</Option>
        </Select>

        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Condition"
          onChange={value => handleChange('condition', value)}
          required
        >
          <Option disabled value={condition}>
            Condition
          </Option>
          <Option value="New">New</Option>
          <Option value="Used - Like New">Used - Like New</Option>
          <Option value="Used - Good">Used - Good</Option>
          <Option value="Used - Fair">Used - Fair</Option>
        </Select>

        <Select
          showSearch
          style={{ width: '100%' }}
          placeholder="Delivery Method"
          onChange={value => handleChange('delivery_method', value)}
          required
        >
          <Option disabled value={delivery_method}>
            Delivery Method
          </Option>
          <Option value="Local pickup only">Local pickup only</Option>
          <Option value="Shipping">Shipping</Option>
        </Select>

        <TextArea
          placeholder="Description"
          value={description}
          name="description"
          autoSize={{ minRows: 6, maxRows: 6 }}
          onChange={e => handleChange(e.target.name, e.target.value)}
          allowClear={true}
          required
        />

        <div className="tags-wrapper">
          <Input
            value={newTag}
            placeholder="Product tags"
            onChange={handleTagChange}
          />

          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i}>{tag} X</span>
            ))}
          </div>
        </div>
        <label htmlFor="tags">Optional</label>

        <button type="submit" className="submit-btn">
          Create Product
        </button>
      </form>
    </Wrapper>
  );
}
