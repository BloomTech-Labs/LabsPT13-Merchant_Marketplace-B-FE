import React from 'react';
import { Link } from 'react-router-dom';
//import { selectProduct } from '../../state/actions';
import styled from 'styled-components';


const Card = styled.div`
  height: 235px;
  width: 250px;
  display: flex;

  img {
    height: 230px;
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

  function sendToWishlist() {
    console.log('send item to wishlist')
  }

  return (
    <Link>
      <Card>
        {/* <img src={product.img} alt="market product" /> */}
        <img src="iPhone.jpg" alt="iphone image"/>
        <div className="productDetails">
          <h4>Hoodie</h4>
          <h5>$55.00</h5>
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
