'use client';
import React, { useState } from 'react';

import { AutoComplete, Button, Form, Input, Select } from 'antd';

import { updateUserInfo } from '@/api/user';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function UserForm() {
  const [form] = Form.useForm();
  // 提交表单
  const onFinish = (value: any) => {
    value.id = 'afa89a8f-79bb-410d-8980-3ff6e4bb1ab7';
    updateUserInfo(value);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const oncsdnChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const onjuejinChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const csdnOptions = autoCompleteResult.map((csdn) => ({
    label: csdn,
    value: csdn,
  }));

  const juejinOptions = autoCompleteResult.map((juejin) => ({
    label: juejin,
    value: juejin,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 1000 }}
      scrollToFirstError
      size={'large'}
    >
      <Form.Item name="Nickname" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '邮箱的格式不对！',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="性别">
        <Select placeholder="请选择你的性别">
          <Option value="male">男</Option>
          <Option value="female">女</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>

      <Form.Item name="phone" label="电话">
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="website" label="github">
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item name="csdn" label="csdn">
        <AutoComplete options={csdnOptions} onChange={oncsdnChange}>
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item name="juejin" label="掘金">
        <AutoComplete options={juejinOptions} onChange={onjuejinChange}>
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item name="intro" label="简介">
        <Input.TextArea showCount maxLength={50} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{ marginTop: '30%', width: '100%' }}>
          保存
        </Button>
      </Form.Item>
    </Form>
  );
}