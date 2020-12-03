import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const DropdownMenu = ({ title, items }) => {
  const menu = (
    <Menu>
      {items.map((item, i) => (
        <Menu.Item key={i}>{item}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span style={{ cursor: 'pointer' }}>
        {title} <DownOutlined />
      </span>
    </Dropdown>
  );
};

export default DropdownMenu;
