'use client';
import React, { useEffect, useState } from 'react';

import { FolderOutlined } from '@ant-design/icons';
import { Menu, Skeleton } from 'antd';

import { getHouses } from '@/api/warehouse';
import useWarehouseStore from '@/store/warehouse';

import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export default function LeftMenu() {
  // 使用zustand更改渲染的页面
  const { updateWarehouseInfo } = useWarehouseStore();
  // 获取用户名称
  const [userName, setUserName] = useState<string>('');
  // 渲染仓库菜单
  const [items, setItems] = useState<MenuItem[]>([]);
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
  useEffect(() => {
    if (localStorage.getItem('id'))
      getHouses(localStorage.getItem('id') as string)
        .then((res) => res.json())
        .then((data) => {
          const newItems: MenuItem[] = []; // 创建一个新的数组来存储新的items
          let newFiles: MenuItem[] = [];
          data.warehouses.forEach((warehouse: { housename: string; id: string; files: any }) => {
            warehouse.files.forEach((file: { name: string; id: string }) => {
              newFiles.push(getItem(file?.name, file?.id));
            });
            newItems.push(getItem(warehouse.housename, warehouse.id, <FolderOutlined />, newFiles));
            newFiles = []; // 清空新的files数组

            setItems(newItems);
          });
        });

    // 获取用户名称
    if (localStorage.getItem('username')) setUserName(localStorage.getItem('username') as string);
  }, []);

  // 菜单点击事件
  const handleClick = (e: any) => {
    updateWarehouseInfo({ warehouseId: e.keyPath[1], fileId: e.key, flag: 3 });
  };

  const leftMenuStyle: React.CSSProperties = {
    width: '95%',
    height: '94vh',
  };

  const SkeletonStyle: React.CSSProperties = {
    marginTop: '2vh',
    width: '80%',
    marginLeft: '10%',
  };

  const [loading] = useState(false);
  return (
    <>
      <Skeleton active title={false} paragraph={{ rows: 5 }} style={SkeletonStyle} loading={loading}>
        <h1
          style={{
            textAlign: 'left',
            fontSize: '25px',
            fontWeight: 'bold',
            marginLeft: '6%',
            marginTop: '2%',
            color: '#388BFF',
          }}
        >
          {userName}的仓库
        </h1>
        <Menu
          mode="inline"
          style={leftMenuStyle}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </Skeleton>
    </>
  );
}
