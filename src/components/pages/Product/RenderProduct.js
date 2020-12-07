import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .details {
    height: 100%;
    width: 400px;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #e7e7e7;
    overflow-x: hidden;
  }

  .main {
    margin-right: 400px;
  }
`;

const RenderProduct = ({ product }) => {
  return (
    <Wrapper>
      <div className="details"></div>

      <div className="main">
        <h1>Product Page</h1>
      </div>
    </Wrapper>
  );
};

export default RenderProduct;
