import React from 'react';
import { Link } from 'react-router-dom';
import { selectProduct } from '../../state/actions';
import styled from 'styled-components';

const Card = styled.div`
  height: 300px;
  width: 260px;
`;

export default function CartCard({product}) {
  return (
    <Link>
      <Card>
        <img src={product.img} alt="market product" />

        <div className="productDetails">
          <h4>Hoodie</h4>
          <h3>$55.00</h3>
          <h3> Quantity: 1</h3>
        </div>
      </Card>
    </Link>
  );
}
