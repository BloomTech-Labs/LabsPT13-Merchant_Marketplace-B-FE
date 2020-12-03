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
      padding: 0 0 0 5px;
      display: flex;
      align-items: center;
    }
  }
`;

export default function DropdownNav({ name, Icon, items }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
          {name}
          {Icon}
        </DropdownToggle>

        <DropdownMenu>
          {items.map((item, i) => (
            <DropdownItem key={i}>{item}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
}
