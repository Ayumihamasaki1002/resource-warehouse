import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col } from 'antd';
import Link from 'next/link';

import styles from './index.module.scss';

import { userLogin } from '@/api/login';

export default function Login() {
  const onFinish = (values: { username: string; password: string }) => {
    userLogin(values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      id={styles.loginForm}
    >
      <div style={{ fontSize: '30px' }}>登录</div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入你的用户名!' }]}
        style={{ marginTop: '30px' }}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          style={{ height: '45px' }}
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
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
            <Button className="login-form-button" style={{ width: '98%', height: '40px' }}>
              <Link href={'/loginPage/register'}>注册</Link>
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
              登录
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
