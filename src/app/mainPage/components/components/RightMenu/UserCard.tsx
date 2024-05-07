'use client';
import React, { useState } from 'react';

import { Skeleton, Space } from 'antd';

export default function UserCard() {
  const [active] = useState(true);
  const topCardStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '80%',
    marginLeft: '10%',
    height: '30%',
    marginTop: '8%',
    padding: '5%',
    borderRadius: '2%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
  };
  const otherAvatarStyles: React.CSSProperties = {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };
  const buttonStyles: React.CSSProperties = {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20vh',
  };
  return (
    <>
      <Space style={topCardStyles}>
        <Skeleton.Avatar active={active} size={80} />

        <Space style={otherAvatarStyles}>
          <Skeleton.Avatar active={active} size={30} />
          <Skeleton.Avatar active={active} size={30} />
          <Skeleton.Avatar active={active} size={30} />
        </Space>
        <Space style={buttonStyles}>
          <Skeleton.Button active={active} size={'default'} />
          <Skeleton.Button active={active} size={'default'} />
        </Space>
      </Space>
    </>
  );
}
