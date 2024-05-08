'use client';
import React from 'react';

import { Input } from 'antd';

import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
export default function SearchInput() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    return { value, _e, info };
  };
  return (
    <>
      <Search placeholder="搜索~" onSearch={onSearch} enterButton style={{ width: '50%', marginLeft: '25%' }} />
    </>
  );
}
