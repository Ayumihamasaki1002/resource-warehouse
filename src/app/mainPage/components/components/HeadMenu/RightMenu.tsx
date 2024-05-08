'use client';
import React from 'react';

import { Space, Skeleton } from 'antd';

import Button from '@/components/Button/Button';

export default function RightMenu() {
  return (
    <>
      <Space>
        <Button text={'文档'} />
        <Button text={'仓库'} />
        <Button text={'社区'} />
        <Button text={'笔记'} />

        <Skeleton.Avatar active={true} size={'large'} />
      </Space>
    </>
  );
}
