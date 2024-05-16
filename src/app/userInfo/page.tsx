'use client';
import React from 'react';

import { Col, Row } from 'antd';

import HeadMenu from '@/components/HeadMenu/HeadMenu';

import RightMenu from '../mainPage/components/RightMenu';
import LeftMenu from '../warehousePage/LeftMenu';

import UserInput from './components/UserInput';

export default function page() {
  return (
    <>
      <HeadMenu />
      {/* 资料修改界面栅格布局 */}
      <Row style={{ height: '94vh' }}>
        <Col xs={{ span: 0 }} md={{ span: 5 }} lg={{ span: 3, offset: 1 }}>
          <LeftMenu />
        </Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 18, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <UserInput />
        </Col>
        <Col xs={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }} lg={{ span: 6, offset: 1 }}>
          <RightMenu />
        </Col>
      </Row>
    </>
  );
}
