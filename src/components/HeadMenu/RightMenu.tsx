'use client';
import React from 'react';

import { Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';

import ImageLoading from './ImageLoading';

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
            src={
              'https://img-soure.oss-cn-shenzhen.aliyuncs.com/oss-demo.jpg?Expires=1715731743&OSSAccessKeyId=TMP.3KfFbgBAiwxEhU8HuR47qqopPGM4vHMdJNrWLSpEN9a6FMceBJWwcCkPj7h9FgduXpcvFRW8Vr5kJ3bxAocad7iHpmKzEQ&Signature=yoDKeEXgS1wkslW4O9sk4fz9%2BGc%3D'
            }
          />
        </div>
      </Space>
    </>
  );
}
