'use client';

import React from 'react';

import { ConfigProvider, Button } from 'antd';

const Home = () => (
  <div className="App">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7799CC',
        },
      }}
    >
      <Button type="primary">Primary Button</Button>
    </ConfigProvider>
  </div>
);

export default Home;
