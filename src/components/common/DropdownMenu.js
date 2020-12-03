import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';
import { icons } from 'react-icons/lib';

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

export default function DropdownNav({ name, Icon }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
          {name}

          {Icon()}
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Wrapper>
  );
}
