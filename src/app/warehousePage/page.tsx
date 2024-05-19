'use client';

import React, { useEffect, useState } from 'react';

import { Col, Row, Spin } from 'antd';

import HeadMenu from '@/components/HeadMenu/HeadMenu';

import LeftMenu from './LeftMenu';
import RanderPage from './RanderPage';

export default function MainPage() {
  const [spinning, setSpinning] = useState<boolean>(false);

  useEffect(() => {
    showLoader();
  });
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 0);
  };
  return (
    <>
      <HeadMenu />
      {/* 仓库栅格布局 */}
      <Row style={{ height: '94vh' }}>
        <Col xs={{ span: 0 }} md={{ span: 5 }} lg={{ span: 5 }}>
          <LeftMenu />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 18, offset: 1 }} lg={{ span: 18, offset: 0 }}>
          <RanderPage />
        </Col>
        <Col xs={{ span: 0, offset: 0 }} md={{ span: 0, offset: 1 }} lg={{ offset: 1 }}></Col>
      </Row>
      <Spin spinning={spinning} tip="Loading..." fullscreen></Spin>
    </>
  );
}
