import React from 'react';
import styled from 'styled-components';

export default function OrderSummary() {

    const Cost = styled.div`
        height: 500px;
        width: 370px;
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
            width: 100%;
        }
    `
    const Line = styled.hr`
        color: rgba(0, 0, 0, 0.65);
        margin-left: -100px;
        margin: 0.6rem 0.4rem;
    `
  
    return (
      <Cost>
          <div> Summary </div>
          <div className="estPaymentLine">
              <div> Subtotal </div>
              <div> $200.00 </div>
          </div>
          <div className="estPaymentLine">
              <div > Shipping Cost </div>
              <div> - </div>
          </div>
          <div className="estPaymentLine">
              <div > Sales Tax </div>
              <div> - </div>
          </div>
          <div className="estPaymentLine">
              <h4 > Total </h4>
              <div> $200.00</div>
          </div>
          <Line />

      </Cost>
    );
  }