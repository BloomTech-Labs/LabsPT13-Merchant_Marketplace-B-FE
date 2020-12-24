import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 15px 0;

  select {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 6px 8px;
    border-color: #d8d8d8;
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover {
      border-color: #46a4f1;
    }
  }
`;

export default function FomSelect({ title, name, values, onChange }) {
  return (
    <Wrapper>
      <select name={name} onChange={onChange} required>
        <option value="" selected disabled>
          {title}
        </option>

        {values.map((val, i) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
