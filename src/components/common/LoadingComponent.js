import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';

const LoadingComponent = ({ active, children, message }) => {
  return (
    <LoadingOverlay
      active={active}
      spinner={<ScaleLoader color="#36D7B7" />}
      text={message}
      fadeSpeed={300}
    >
      {children}
    </LoadingOverlay>
  );
};

export default LoadingComponent;
