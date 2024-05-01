'use client';

import React from 'react';

import { Row, Col } from 'antd';

import styles from './index.module.scss';
import Register from './register';
export default function registerPage() {
  // 注册处理

  return (
    <>
      <div id={styles.registerPage}>
        <Row>
          <Col span={5} offset={0}></Col>
          <Col span={12} offset={7}>
            <div id={styles.registerFormDiv}>
              <Register />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
