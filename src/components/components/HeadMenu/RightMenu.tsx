'use client';
import React from 'react';

import { Space, Skeleton } from 'antd';

export default function RightMenu() {
  return (
    <>
      <Space>
        <Skeleton.Avatar active={true} size={'default'} />
      </Space>
    </>
  );
}
