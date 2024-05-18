'use client';
import React, { useEffect, useState } from 'react';

import { Skeleton, Space } from 'antd';

import { getImg } from '@/components/HeadMenu/handleSaved/getImg';
import ImageLoading from '@/components/ImageLoading';

export default function UserCard() {
  const [topCard, setTopCard] = useState<string>('');
  const [githubCard, setgithubCard] = useState<string>('');
  const [juejinCard, setjuejinCard] = useState<string>('');
  const [csdnCard, setcsdnCard] = useState<string>('');
  useEffect(() => {
    getImg('/oss-demo.jpg').then((res) => {
      setTopCard(res);
    });
    getImg('/github.png').then((res) => {
      setgithubCard(res);
    });
    getImg('/juejin.png').then((res) => {
      setjuejinCard(res);
    });
    getImg('/csdn.png').then((res) => {
      setcsdnCard(res);
    });
  });
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
        <ImageLoading size={80} src={topCard} url="/userInfo" />

        <Space style={otherAvatarStyles}>
          <ImageLoading size={30} src={githubCard} url="https://github.com/Ayumihamasaki1002" />
          <ImageLoading size={30} src={juejinCard} url="https://juejin.cn/user/3444120689837150" />
          <ImageLoading size={30} src={csdnCard} url="https://blog.csdn.net/m0_62211690?spm=1000.2115.3001.5343" />
        </Space>
        <Space style={buttonStyles}>
          <Skeleton.Button active={active} size={'default'} />
          <Skeleton.Button active={active} size={'default'} />
        </Space>
      </Space>
    </>
  );
}
