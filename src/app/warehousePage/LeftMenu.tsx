'use client';
import React, { useEffect, useState } from 'react';

import { FolderOutlined, EditFilled } from '@ant-design/icons';
import { Menu, Skeleton, Tooltip } from 'antd';

import InputOrDiv from '@/components/InputOrDiv';

import { getHouses } from '@/api/warehouse';
import useWarehouseStore from '@/store/warehouse';

import type { GetProp, MenuProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export default function LeftMenu() {
  // 使用zustand更改渲染的页面
  const { updateWarehouseInfo, warehouseInfo, updateFacePage, updateWarehouseInfoSingle } = useWarehouseStore();
  // 获取用户名称
  const [userName, setUserName] = useState<string>('');
  // 渲染仓库菜单
  const [items, setItems] = useState<MenuItem[]>([]);
  // 菜单是否可选
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['facePage']);
  // 菜单栏更改锁
  // const [lock, setLock] = useState<boolean>(false);
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
      getHouses(localStorage.getItem('id') as string) // 请求仓库列表
        .then((res) => res.json())
        .then((data) => {
          updateFacePage(data.warehouseFacePage); // 更新仓库首页
          const newItems: MenuItem[] = []; // 创建一个新的数组来存储新的items
          let newFiles: MenuItem[] = [];
          data.warehouses.forEach((warehouse: { housename: string; id: string; files: any }) => {
            warehouse.files.forEach((file: { name: string; id: string }) => {
              newFiles.push(getItem(file?.name, file?.id));
            });
            newItems.push(getItem(warehouse.housename, warehouse.id, <FolderOutlined />, newFiles));
            newFiles = []; // 清空新的files数组
          });
          newItems.unshift(getItem(<InputOrDiv textName="首页" title="点击修改" width="50%"></InputOrDiv>, 'facePage'));
          setItems(newItems);
        });

    // 获取用户名称
    if (localStorage.getItem('username')) setUserName(localStorage.getItem('username') as string);
  }, [warehouseInfo, updateFacePage]);

  // 菜单点击事件  -fix- 这里想做的是点击菜单后更改文件夹的信息
  const handleClick = (e: any) => {
    setSelectedKeys([e.key]);

    updateWarehouseInfo({ warehouseId: e.keyPath[1], fileId: e.key, flag: 3, fileName: 'default' });
  };
  // 跳转到仓库设置页面
  const toWarehouseSetting = () => {
    updateWarehouseInfoSingle(1);
    setSelectedKeys([]);
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
        <div
          style={{
            textAlign: 'left',
            fontSize: '22px',
            fontWeight: '600',
            marginLeft: '6%',
            marginTop: '2%',
            paddingRight: '10%',
            color: '#388BFF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <p>{userName}的仓库</p>
          <Tooltip title="单击修改仓库" color="blue">
            <EditFilled style={{ cursor: 'pointer' }} onClick={toWarehouseSetting} />
          </Tooltip>
        </div>
        <Menu
          mode="inline"
          style={leftMenuStyle}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items}
          selectedKeys={selectedKeys}
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </Skeleton>
    </>
  );
}
