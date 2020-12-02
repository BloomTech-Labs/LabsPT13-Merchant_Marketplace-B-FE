import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 3px;
  }

  .details {
    padding: 5px;

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
