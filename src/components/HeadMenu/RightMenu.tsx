'use client';
import React, { useEffect, useState } from 'react';

import { Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import MyButton from '@/components/Button/MyButton';

import ImageLoading from '../ImageLoading';

import { getImg } from './handleSaved/getImg';

export default function RightMenu() {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    // 获取头像url
    const avatar = localStorage.getItem('avatar');
    if (avatar)
      getImg(avatar).then((res) => {
        setImgUrl(res);
      });
  }, []);

  const router = useRouter();
  // 用户点击头像时触发
  const handleClick = () => {
    const token = localStorage.getItem('token');

    if (token === null || token === undefined || token === '' || token === 'undefined') router.push('/loginPage/login');
    else router.push('/mainPage');
  };
  return (
    <>
      <Space style={{ marginTop: '1vh' }}>
        <Link href={'/warehousePage'}>
          <MyButton text={'文档'} />
        </Link>
        <Link href={'/warehousePage'}>
          <MyButton text={'仓库'} />
        </Link>
        <MyButton text={'社区'} />
        <MyButton text={'笔记'} />
        <div onClick={handleClick}>
          <ImageLoading size="large" src={imgUrl} />
        </div>
      </Space>
    </>
  );
}
