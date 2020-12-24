import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .MuiSkeleton-text {
    transform: none;
    background-color: #e7e7e7;
  }

  .MuiSkeleton-rect {
    position: absolute;
    top: 73px;
    align-self: center;
    min-width: 600px;
    background-color: #f7f7f7;
  }
`;

export default function LoadingSkeleton() {
  return (
    <Wrapper>
      <Skeleton animation="wave" height={180} />
      <Skeleton variant="rect" height={36} color="red" />
    </Wrapper>
  );
}
