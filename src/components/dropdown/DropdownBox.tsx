import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Menu, message, Space } from 'antd';
import React from 'react';
import "./dropdown.scss"



const DropdownBox = () => {

  const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Upcoming Launches',
          key: '1',
        },
        {
          label: 'Successfull Lanches',
          key: '2',
        },
        {
          label: 'Failed Lanuches',
          key: '3',
        },
      ]}
    />
  );
  return (
    <div className="dropBox">
    <Dropdown  overlay={menu}>
    <a onClick={e => e.preventDefault()}>
      <Space> 
        <img src="/Assets/Vector.svg" alt="" /> All Launches
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  </div>
  )
}

export default DropdownBox