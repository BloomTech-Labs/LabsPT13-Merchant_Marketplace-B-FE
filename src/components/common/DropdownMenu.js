import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  .dropdown {
    .btn {
      background: transparent;
      border: none;
      color: #111;
      outline: none;
      display: flex;
      align-items: center;
    }
  }
`;

export default function DropdownNav({ name, items }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{name}</DropdownToggle>

        <DropdownMenu>
          {items.map((item, i) => (
            <DropdownItem key={i}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
}
