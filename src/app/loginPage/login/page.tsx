'use client';

import React from 'react';

import { Row, Col } from 'antd';

import bgImg from '../index.module.scss';

import styles from './index.module.scss';
import Login from './login';
export default function loginPage() {
  // 点击登录处理

  return (
    <>
      <div id={bgImg.img}>
        <Row>
          <Col span={5} offset={0}></Col>
          <Col span={12} offset={7}>
            <div id={styles.loginFormDiv}>
              <Login />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
