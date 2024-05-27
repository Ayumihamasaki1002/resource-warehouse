'use client';
import React, { useEffect, useState } from 'react';

import { FolderOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Menu, Skeleton, message, Popconfirm } from 'antd';

import InputOrDiv from '@/components/InputOrDiv';

import { getHouses } from '@/api/warehouse';
import { deleteHousedetail } from '@/api/warehouse/housedetail';
import useWarehouseStore from '@/store/warehouse';

import type { GetProp, MenuProps, PopconfirmProps } from 'antd';

type MenuItem = GetProp<MenuProps, 'items'>[number];

export default function LeftMenu() {
  // 使用zustand更改渲染的页面
  const { updateWarehouseInfo, updateFacePage } = useWarehouseStore();
  // 获取用户名称
  const [userName, setUserName] = useState<string>('');
  // 渲染仓库菜单
  const [items, setItems] = useState<MenuItem[]>([]);
  // 菜单是否可选
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['facePage']);
  // 控制菜单页面重新渲染
  const [reload, setReload] = useState<boolean>(false);

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
              newFiles.push(getItem(<Item {...file} />, file?.id));
            });
            newItems.push(
              getItem(
                <InputOrDiv
                  textName={warehouse.housename}
                  title="点击修改"
                  width="50%"
                  updateInfo={warehouse.id}
                  updateMode="warehouse"
                ></InputOrDiv>,
                warehouse.id,
                <FolderOutlined />,
                newFiles,
              ),
            );
            newFiles = []; // 清空新的files数组
          });
          newItems.unshift(getItem(<InputOrDiv textName="首页" title="点击修改" width="50%"></InputOrDiv>, 'facePage'));
          setItems(newItems);
          setReload(false); // 更新items
        });

    // 获取用户名称
    if (localStorage.getItem('username')) setUserName(localStorage.getItem('username') as string);
  }, [updateFacePage, reload]);

  // 菜单点击事件
  const handleClick = (e: any) => {
    setSelectedKeys([e.key]);
    updateWarehouseInfo({ warehouseId: e.keyPath[1], fileId: e.key, flag: 3, fileName: 'default' });
  };

  // 封装item
  /*
   -fix- 这里有个小问题： 24.5.27
   1. 如果点击其他地方应该把弹窗关闭，但是这里用了open控制弹窗是否打开，当点击其他地方时，不知道如何控制open
   2. 如果不绑open，弹窗关闭时，无法控制删除按钮的显示与隐藏
  */
  const Item = (file: { name: string; id: string }) => {
    // 控制删除按钮是否显示
    const [isFade, setIsFade] = useState(true);
    // 控制移出事件是否触发
    const [isLeave, setIsLeave] = useState(true);
    // 控制弹窗是否打开
    const [open, setOpen] = useState(false);
    // 鼠标移入显示删除按钮
    const handleonMouseEnter = () => {
      setIsFade(false);
    };
    // 鼠标移出隐藏删除按钮
    const handleonMouseLeave = () => {
      if (isLeave) setIsFade(true);
    };
    // 确认删除
    const confirm: PopconfirmProps['onConfirm'] = async () => {
      await deleteHousedetail(file?.id); // 删除文件
      setIsLeave(true);
      setOpen(false);
      message.success('删除成功');
      setReload(true);
    };
    // 取消删除
    const cancel: PopconfirmProps['onCancel'] = () => {
      message.error('取消成功');
      setIsLeave(true);
      setOpen(false);
    };
    // 删除文件夹按钮
    const deleteFile = () => {
      setOpen(true);
      setIsLeave(false);
    };
    return (
      <div
        style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}
        onMouseEnter={handleonMouseEnter}
        onMouseLeave={handleonMouseLeave}
      >
        <InputOrDiv
          textName={file?.name}
          updateInfo={file?.id}
          updateMode={'file'}
          title="点击修改"
          width="50%"
        ></InputOrDiv>
        {isFade ? (
          <div></div>
        ) : (
          <Popconfirm
            title="删除文件"
            description="确认要删除文件吗?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            open={open}
          >
            <CloseCircleOutlined onClick={() => deleteFile()} />
          </Popconfirm>
        )}
      </div>
    );
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
  // 骨架屏
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
