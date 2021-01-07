import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 10px;

  .MuiSkeleton-text {
    transform: none;
    background-color: #ebebeb;
  }

  .MuiSkeleton-rect {
    position: absolute;
    bottom: 0;
    align-self: center;
    background-color: #d8d7d7;
  }
`;

export default function ProductCardSkeleton() {
  return (
    <Wrapper>
      <Skeleton animation="wave" height={300} width={260} />
      <Skeleton variant="rect" height={70} width={260} />
    </Wrapper>
  );
}
