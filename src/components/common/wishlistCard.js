import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../state/actions';

const Card = styled.div`
  height: 100%;
  width: 260px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.3s;
  margin: 15px;

  &:hover {
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  img {
    width: 100%;
    height: 220px;
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
    button {
      padding: 3px 13px 3px 8px;
      background-color: #2d88ff;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background-color: #4594fa;
      }
    }
  }
`;
export default function WishlistCard({ product }) {
  const dispatch = useDispatch();
  function addToCart() {
    console.log('added to Cart');
  }
  function removeFromWishlist() {
    console.log('removed from wishlist');
  }
  return (
    <Link
      to={`/marketplace/item/${product.id}`}
      onClick={() => dispatch(selectProduct(product))}
    >
      <Card>
        <div className="details">
          {<img src={product.images[0].img_url} alt="market product" />}
          <div>
            <h2>{product.title}</h2>
            <p>
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <button onClick={addToCart}>Add to cart</button>
            <button onClick={removeFromWishlist}>Remove</button>
          </div>
        </div>
      </Card>
      /{' '}
    </Link>
  );
}
