'use client';
import React, { useState } from 'react';

import { AutoComplete, Button, Cascader, Form, Input, Select } from 'antd';

import type { CascaderProps } from 'antd';

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>['options'] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

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

  const onFinish = () => {
    // console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
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

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600, maxHeight: '80%' }}
      scrollToFirstError
    >
      <Form.Item
        name="Nickname"
        label="昵称"
        rules={[{ required: true, message: '请输入你的昵称!', whitespace: true }]}
      >
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
          {
            required: true,
            message: '请输入你的邮箱',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="性别" rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="residence"
        label="地址"
        rules={[{ type: 'array', required: true, message: 'Please select your habitual residence!' }]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item name="phone" label="电话" rules={[{ required: true, message: 'Please input your phone number!' }]}>
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="website" label="github" rules={[{ required: true, message: 'Please input website!' }]}>
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item name="intro" label="简介" rules={[{ required: true, message: '请输入你的简介' }]}>
        <Input.TextArea showCount maxLength={50} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
}
