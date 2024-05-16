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
              'https://img-soure.oss-cn-shenzhen.aliyuncs.com/oss-demo.jpg?Expires=1715867416&OSSAccessKeyId=TMP.3Kjt4TD6TE5VBFtWR58Cm4i6RgfLanQnCHS2mVVdKYKK2dkeNV7YVy6sxSX8sJLZkdaa4PYMKsqyNP1Pz6xgkZ3Ztextsd&Signature=FdBQjzjzncF3dxtpzKqBwxc6e7E%3D'
            }
          />
        </div>
      </Space>
    </>
  );
}
