import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import ImagesUploader from '../../common/ImagesUploader';

const Wrapper = styled.div`
  background-color: #f7f7f7;

  form {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #fff;

    button {
      padding: 5px 20px;

      &:hover {
        background: #545972;
      }
    }

    label {
      font-size: 13px;
      color: #b0b3b8;
      display: block;
      margin-bottom: 4px;
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

      .addTag-icon {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        border: 1px solid;
        padding: 5px;
        font-size: 11px;
        border-radius: 50%;
        background-color: #3f4257;
        color: #fff;

        &:hover {
          background-color: #5e6075;
        }
      }
    }

    .submit-btn {
      background: #3f4257;
      border-radius: 2px;
      color: white;
      letter-spacing: 0.5px;
      width: 100%;
      font-size: 16px;
      margin: 40px 0 20px 0;
      transition: all 0.2s ease-in;
      cursor: pointer;
      border: none;
    }
  }
`;

export default function RenderCreateProduct({
  userInfo,
  formInfo,
  images,
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

        <span>Photos - {images.length}/5 - You can add up to 5 photos.</span>
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
          <div style={{ position: 'relative' }}>
            <Input
              value={newTag}
              placeholder="Product tags"
              onChange={handleTagChange}
              onPressEnter={newTag && addTag}
            />

            {newTag && (
              <PlusOutlined className="addTag-icon" onClick={addTag} />
            )}
          </div>

          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i} onClick={() => removeTag(tag)}>
                {tag} X
              </span>
            ))}
          </div>
        </div>
        <label htmlFor="tags">Optional - Limit: 10</label>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="submit-btn">
            Create Product
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
