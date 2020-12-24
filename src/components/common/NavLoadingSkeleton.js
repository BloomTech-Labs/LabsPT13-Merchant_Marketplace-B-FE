import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .MuiSkeleton-text {
    transform: none;
    background-color: #e7e7e7;
  }

  .MuiSkeleton-rect {
    position: absolute;
    top: 66px;
    align-self: center;
    min-width: 530px;
    background-color: #f7f7f7;
  }
`;

export default function NavLoadingSkeleton() {
  return (
    <Wrapper>
      <Skeleton animation="wave" height={160} />
      <Skeleton variant="rect" height={30} />
    </Wrapper>
  );
}
