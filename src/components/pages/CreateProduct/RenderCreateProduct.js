import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeftOutlined } from '@ant-design/icons';
const Wrapper = styled.div`
  .form-wrapper {
    border: 1px solid red;
    max-width: 800px;
    height: 100vh;
    margin: auto;
    padding: 15px;

    h1 {
      font-weight: 600;
    }
  }
`;

export default function RenderCreateProduct({ sellerInfo }) {
  return (
    <Wrapper>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>

      <div className="form-wrapper">
        <h1>Item For Sale</h1>
      </div>
    </Wrapper>
  );
}
