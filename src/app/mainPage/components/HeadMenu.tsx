import React from 'react';

import { Col, Row } from 'antd';

import RightMenu from './components/HeadMenu/RightMenu';
import SearchInput from './components/HeadMenu/SearchInput';

const headMenuStyle: React.CSSProperties = {
  height: '6vh',
  borderBottom: '0.1em solid #e9e9e9',
  backgroundColor: 'white',
};

export default function HeadMenu() {
  return (
    <div style={{ position: 'sticky', top: '1vh', zIndex: '100', height: '10vh' }}>
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
