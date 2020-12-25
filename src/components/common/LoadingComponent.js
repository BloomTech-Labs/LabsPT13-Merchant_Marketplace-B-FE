import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

const LoadingComponent = ({ active }) => {
  return (
    <div>
      <LoadingOverlay active={active} spinner text="Loading your content...">
        <p>Some content or children or something.</p>
      </LoadingOverlay>
    </div>
  );
};

export default LoadingComponent;
