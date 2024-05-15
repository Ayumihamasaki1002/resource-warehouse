'use client';
import React from 'react';

import { Col, Row } from 'antd';

import HeadMenu from '@/components/HeadMenu/HeadMenu';

import LeftMenu from '../warehousePage/LeftMenu';

import UserInput from './components/UserInput';

export default function page() {
  return (
    <>
      <HeadMenu />
      {/* 主页栅格布局 */}
      <Row style={{ height: '94vh' }}>
        <Col xs={{ span: 0 }} md={{ span: 5 }} lg={{ span: 5, offset: 1 }}>
          <LeftMenu />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 18, offset: 1 }} lg={{ span: 17, offset: 0 }}>
          <UserInput />
        </Col>
        <Col xs={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }} lg={{ span: 0, offset: 1 }}></Col>
      </Row>
    </>
  );
}
