import React from 'react';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, message } from 'antd';
import Link from 'next/link';

import styles from './index.module.scss';

import { userRegister } from '@/api/register';

export default function Register() {
  type value = {
    username: string;
    password: string;
  };
  const [messageApi, contextHolder] = message.useMessage();
  // 确认注册
  const onFinish = async (value: value) => {
    // 发送请求
    const data = await userRegister({ username: value.username, password: value.password });

    if (data.statusCode === 200) {
      messageApi.open({
        type: 'success',
        content: '注册成功',
      });
      window.location.href = '/loginPage/login'; // 注册成功后跳转到登录页面
    } else if (data.statusCode === 400) {
      messageApi.open({
        type: 'error',
        content: data.message,
      });
    } else {
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
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        id={styles.registerForm}
      >
        <div style={{ fontSize: '30px', color: '#7799CC', fontFamily: 'cuisive' }}>register</div>
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
        <Form.Item
          name="password"
          label=""
          rules={[
            {
              required: true,
              message: '请输入你的密码!',
            },
          ]}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined />} placeholder="password" style={{ height: '45px' }} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label=""
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再输入一次你的密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次密码输入不一致'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="password again" style={{ height: '45px' }} />
        </Form.Item>

        <Row style={{ marginTop: '50px' }}>
          <Col span={9}>
            <Form.Item>
              <Button className="register-form-button" style={{ width: '98%', height: '40px' }}>
                <Link href={'/loginPage/login'}>登录</Link>
              </Button>
            </Form.Item>
          </Col>
          <Col span={9} offset={6}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="register-form-button"
                style={{ width: '98%', height: '40px' }}
              >
                注册
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
