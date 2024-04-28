'use client';

import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';

import styles from './index.module.scss';

export default function login() {
  // 点击登录处理
  // const onFinish = (values: unknown) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <>
      <div id={styles.loginPage}>
        <Row>
          <Col span={5} offset={0}></Col>
          <Col span={12} offset={7}>
            <div id={styles.loginFormDiv}>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                id={styles.loginForm}
              >
                <div style={{ fontSize: '30px' }}>登录</div>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                  style={{ marginTop: '30px' }}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    style={{ height: '45px' }}
                  />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    style={{ height: '45px', marginTop: '10px' }}
                  />
                </Form.Item>

                <Row style={{ marginTop: '50px' }}>
                  <Col span={9}>
                    <Form.Item>
                      <Button htmlType="submit" className="login-form-button" style={{ width: '98%', height: '40px' }}>
                        Regist
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={9} offset={6}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '98%', height: '40px' }}
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
