import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .details {
    height: 100%;
    width: 400px;
    background-color: #e7e7e7;
  }

  .main {
    position: fixed;
    background-color: orange;
    height: 100%;
    width: calc(100% - 400px);
    margin-right: 400px;
  }
`;

const RenderProduct = ({ product }) => {
  return (
    <Wrapper>
      <div className="details">
        <h1>Details</h1>
      </div>

      <div className="main">
        <h1>Product Page</h1>
      </div>
    </Wrapper>
  );
};

export default RenderProduct;
