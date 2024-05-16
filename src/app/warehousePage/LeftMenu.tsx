'use client';
import React, { useEffect, useState } from 'react';

import { CalendarOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Skeleton } from 'antd';

import { getHouses } from '@/api/warehouse';

import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export default function LeftMenu() {
  useEffect(() => {
    getHouses('afa89a8f-79bb-410d-8980-3ff6e4bb1ab7');
  }, []);

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

  const SkeletonStyle: React.CSSProperties = {
    marginTop: '5vh',
    width: '80%',
    marginLeft: '10%',
  };

  const [loading] = useState(false);

  // const onChange = (checked: boolean) => {
  //   setLoading(!checked);
  // };

  return (
    <>
      <Skeleton active title={false} paragraph={{ rows: 5 }} style={SkeletonStyle} loading={loading}>
        <Menu style={leftMenuStyle} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} />
      </Skeleton>
    </>
  );
}