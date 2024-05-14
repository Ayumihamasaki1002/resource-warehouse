'use client';
import React, { useEffect } from 'react';

import { Skeleton } from 'antd';

import { getSingleHouseDetail } from '@/api/warehouse/housedetail';

export default function WarehouseDatail() {
  useEffect(() => {
    getSingleHouseDetail('855aa5a5-83ec-4887-a1b5-3dd714314c6d', '2ad2d64d-66b5-4ba5-8f4b-3a199bb46975');
  });
  return (
    <>
      <div style={{ display: 'Flex', flexDirection: 'row', width: '20%' }}>
        <Skeleton.Avatar active size={'large'} />
        <Skeleton active paragraph={{ rows: 0 }} style={{ marginLeft: '5%', marginTop: '5%' }} />
      </div>
    </>
  );
}
