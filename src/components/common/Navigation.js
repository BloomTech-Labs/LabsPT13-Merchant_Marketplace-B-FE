import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid red;
  padding: 15px;

  svg {
    /* vertical-align: middle; */
  }
`;

export default function navigation() {
  return (
    <Wrapper>
      <FaUserCircle size="3em" />
    </Wrapper>
  );
}
