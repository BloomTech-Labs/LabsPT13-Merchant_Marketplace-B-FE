import React from 'react';
import { Link } from 'react-router-dom';
//import { selectProduct } from '../../state/actions';
import styled from 'styled-components';

export default function Payments() {

    const Checkout = styled.div`
        height: 500px;
        width: 80%;
        border-radius: 3px;
        border: 2px solid black;
        padding: 1.5rem; 
        margin: 2rem 2rem 2rem 2rem;

        .estPaymentLine {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem 0rem 1rem 0rem;
        }

        .checkoutButton {
            color: white;
            background: black;
            padding: 0.5rem;
            margin-top: 2rem;
            width: 29.5rem;
        }
    `
    const Line = styled.hr`
        color: rgba(0, 0, 0, 0.65);
        margin-left: -100px;
        margin: 0.6rem 0.4rem;
    `
  
    return (
      <Checkout>
          <h2> Order Summary </h2>
          <div className="estPaymentLine">
              <div> Subtotal </div>
              <div> $200.00 </div>
          </div>
          <div className="estPaymentLine">
              <div > Estimated Shipping Cost</div>
              <div> - </div>
          </div>
          <div className="estPaymentLine">
              <div > Estimated Sales Tax </div>
              <div> - </div>
          </div>
          <Line />
          <div className="estPaymentLine">
              <div > Estimated Total </div>
              <div> $200.00</div>
          </div>
          <button className="checkoutButton"> CHECKOUT </button>

      </Checkout>
    );
  }