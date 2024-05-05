'use client';
import React, { useState } from 'react';

import { Skeleton, Space } from 'antd';

export default function NoticeCard() {
  const [active] = useState(true);
  const minCardStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '80%',
    marginLeft: '10%',
    height: '23%',
    marginTop: '10%',
    padding: '5%',
    borderRadius: '2%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
  };

  return (
    <>
      <Space style={minCardStyles}>
        <Skeleton paragraph={{ rows: 4 }} active={active} style={{ width: '15vw', marginTop: '3vh' }} title={false} />
      </Space>
    </>
  );
}
