import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../state/actions';
import styled from 'styled-components';


const Card = styled.div`
  height: 235px;
  width: 250px;
  display: flex;

  img {
    height: 12.9rem;
    width: 15rem;
    padding: 0.5rem;
  }

  .productDetails {
    height: 230px;
  }

  .cartButtons {
    display: flex;
    font-size: 0.5rem;
    padding-top: 6rem;
    color: black;
  }

`;

export default function CartCard({ product }) {

  const dispatch = useDispatch();

  function sendToWishlist() {
    console.log('send item to wishlist')
  }

  return (
    <Link
      to={{ pathname: `/marketplace/item/${product.id}`, product }}
      onClick={() => dispatch(selectProduct(product))}
    >
      <Card>
        {/* <img src={product.img} alt="market product" /> */}
        <img src="https://photos5.appleinsider.com/gallery/38960-74440-iPhone-12-Pro-Max-Back-xl.jpg" alt="iphone image"/>
        
        {/* {<img src={product.images[0].img_url} alt="market product" />} */}
        <div className="productDetails">
          <h4>{product.brand}</h4>
          <h5>{product.price}</h5>
          <h6> Quantity: 1</h6>
          <div class="cartButtons">
            <button onClick={sendToWishlist}>Send to Wishlist</button>
            <button> Remove </button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
