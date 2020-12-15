import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  transition-duration: 0.2s;
  color: #363636;

  &:hover {
    color: #0688f1;
  }
`;

export default function Icon({ Icon, styles, id = '' }) {
  return (
    <Wrapper id={id} style={styles}>
      {Icon}
    </Wrapper>
  );
}
