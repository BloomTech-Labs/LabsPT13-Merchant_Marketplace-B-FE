import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

const Wrapper = styled.div`
  ._loading_overlay_content {
    margin-top: calc(50vh - 60px);
    color: #f5f4f4;
  }
`;

const LoadingComponent = ({ active, children, message }) => {
  return (
    <Wrapper>
      <LoadingOverlay
        active={active}
        spinner={<ScaleLoader color="#36D7B7" />}
        text={message}
      >
        {children}
      </LoadingOverlay>
    </Wrapper>
  );
};

export default LoadingComponent;
