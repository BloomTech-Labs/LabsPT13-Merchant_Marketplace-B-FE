import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid green;
  height: 220px;
  width: 200px;
  margin: 10px;
`;
export default function ProductCard() {
  return <Card>Card</Card>;
}
