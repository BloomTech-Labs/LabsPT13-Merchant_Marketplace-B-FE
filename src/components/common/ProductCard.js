import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProduct } from '../../state/actions';
import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  width: 260px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;
  border: 1px solid #f1efef;

  &:hover {
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  img {
    height: 220px;
    width: 260px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    object-fit: cover;
  }

  .details {
    padding: 5px;
    background-color: #e8f4f7;

    p {
      color: gray;
    }

    h3,
    h4 {
      font-size: 16px;
      margin: 0;
    }
    h3 {
      font-weight: bold;
    }
  }
`;
export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/marketplace/item/${product.id}`}
      onClick={() => dispatch(selectProduct(product))}
    >
      <Card>
        {<img src={product.images[0].img_url} alt="market product" />}

        <div className="details">
          <h4>${product.price}</h4>
          <h3>{product.title}</h3>
          <p>Location</p>
        </div>
      </Card>
    </Link>
  );
}
