'use client';

import React, { useEffect, useState } from 'react';

import { Col, Row, Spin } from 'antd';

import HeadMenu from '@/components/HeadMenu/HeadMenu';

import CenterMenu from './CenterMenu';
import LeftMenu from './LeftMenu';

export default function MainPage() {
  const [spinning, setSpinning] = useState<boolean>(false);

  useEffect(() => {
    showLoader();
  });
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };
  return (
    <>
      <HeadMenu />
      {/* 主页栅格布局 */}
      <Row style={{ height: '94vh' }}>
        <Col xs={{ span: 0 }} md={{ span: 5 }} lg={{ span: 5 }}>
          <LeftMenu />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 18, offset: 1 }} lg={{ span: 15, offset: 0 }}>
          <CenterMenu />
        </Col>
        <Col
          xs={{ span: 0, offset: 0 }}
          md={{ span: 0, offset: 0 }}
          lg={{ span: 3, offset: 1 }}
          style={{ backgroundColor: 'yellow' }}
        ></Col>
      </Row>
      <Spin spinning={spinning} tip="Loading..." fullscreen></Spin>
    </>
  );
}
