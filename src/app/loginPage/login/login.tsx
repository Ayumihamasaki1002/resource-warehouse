import React from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, message } from 'antd';
import Link from 'next/link';

import styles from './index.module.scss';

import { userLogin } from '@/api/login';

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: { username: string; password: string }) => {
    const data = await userLogin(values);
    // 登录成功
    if (typeof data === 'object' && data && !data.statusCode) {
      messageApi.open({
        type: 'success',
        content: '登录成功',
      });
      window.location.href = '/mainPage';
    }
    // 登录失败
    else if (typeof data === 'object' && data?.statusCode === 400) {
      messageApi.open({
        type: 'error',
        content: data.message,
      });
    }
    // 服务器错误
    else {
      messageApi.open({
        type: 'error',
        content: '服务器错误，请联系管理员！',
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        id={styles.loginForm}
      >
        <div style={{ fontSize: '30px', color: '#7799CC', fontFamily: '' }}>login</div>
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
    </>
  );
}
