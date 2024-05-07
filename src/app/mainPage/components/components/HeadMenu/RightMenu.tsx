'use client';
import React from 'react';

import { Space, Skeleton } from 'antd';

import Button from '@/components/Button/Button';

export default function RightMenu() {
  return (
    <>
      <Space>
        <Button />
        <Skeleton.Avatar active={true} size={'large'} />
      </Space>
    </>
  );
}
