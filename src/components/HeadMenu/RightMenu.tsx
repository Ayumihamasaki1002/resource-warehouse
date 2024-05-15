'use client';
import React from 'react';

import { Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';

import ImageLoading from '../ImageLoading';

export default function RightMenu() {
  const router = useRouter();
  // 用户点击头像时触发
  const handleClick = () => {
    const token = localStorage.getItem('token');

    if (token === null || token === undefined || token === '' || token === 'undefined') router.push('/loginPage/login');
    else router.push('/mainPage');
  };
  return (
    <>
      <Space>
        <Link href={'/warehousePage'}>
          <Button text={'文档'} />
        </Link>
        <Link href={'/warehousePage'}>
          <Button text={'仓库'} />
        </Link>
        <Button text={'社区'} />
        <Button text={'笔记'} />
        <div onClick={handleClick}>
          <ImageLoading
            size="large"
            src={
              'https://img-soure.oss-cn-shenzhen.aliyuncs.com/oss-demo.jpg?Expires=1715814540&OSSAccessKeyId=TMP.3KgTvpa7uE3wX2HkM4nBQyfqBx3Urp1qr6A97n3Rd4wri7TZXrudM436iewsr3UMzMw9kyqWzVM7gAG9RrGyWyaoQWUD4H&Signature=EYf90%2Bi0BPx0kbV5Zk6Yhy139Ok%3D'
            }
          />
        </div>
      </Space>
    </>
  );
}
