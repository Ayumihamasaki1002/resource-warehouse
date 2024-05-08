'use client';
import React, { useState } from 'react';

import { CalendarOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Skeleton } from 'antd';

import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export default function LeftMenu() {
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Navigation One', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
  ];

  const leftMenuStyle: React.CSSProperties = {
    width: '95%',
    height: '94vh',
  };

  const checked = useState(false);
  if (checked) {
    return (
      <>
        <Menu style={leftMenuStyle} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} />
      </>
    );
  } else {
    return <Skeleton active />;
  }
}
