import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  width: 260px;
  margin: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #c4c3c3;
  }

  .details {
    padding: 5px 0 0 0;

    p {
      color: gray;
    }
  }
`;
export default function ProductCard({ product }) {
  return (
    <Card>
      <img src={product.img} alt="market product" />

      <div className="details">
        <h3>${product.price}</h3>
        <h3>{product.title}</h3>
        <p>Location</p>
      </div>
    </Card>
  );
}
