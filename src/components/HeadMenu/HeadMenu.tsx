'use client';
import React, { useEffect } from 'react';

import { Col, Row } from 'antd';

import { getId } from './handleSaved/saveId';
import RightMenu from './RightMenu';
import SearchInput from './SearchInput';

const headMenuStyle: React.CSSProperties = {
  height: '6vh',
  borderBottom: '0.1em solid #e9e9e9',
  backgroundColor: 'white',
};

export default function HeadMenu() {
  // 获取用户ID
  useEffect(() => {
    getId();
  }, []);

  return (
    <div style={{ position: 'sticky', top: '0vh', zIndex: '100', height: '6vh' }}>
      <Row style={headMenuStyle}>
        <Col xs={{ span: 0 }} md={{ span: 6 }} lg={{ span: 4 }}></Col>
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 17, offset: 1 }} lg={{ span: 12, offset: 1 }}>
          <SearchInput />
        </Col>
        <Col xs={{ span: 0, offset: 0 }} md={{ span: 0, offset: 0 }} lg={{ span: 7, offset: 0 }}>
          <RightMenu />
        </Col>
      </Row>
    </div>
  );
}
