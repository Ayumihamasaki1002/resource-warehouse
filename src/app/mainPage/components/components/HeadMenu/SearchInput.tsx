'use client';
import React, { SyntheticEvent } from 'react';

import { Input } from 'antd';

import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;
export default function SearchInput() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    return { value, _e, info };
  };
  const onChange: SearchProps['onChange'] = () => {
    // console.log(1);
  };
  const onFocus: React.EventHandler<SyntheticEvent<HTMLInputElement>> = () => {
    // console.log(2);
  };
  return (
    <>
      <Search
        placeholder="搜索~"
        onSearch={onSearch}
        onFocus={onFocus}
        enterButton
        onChange={onChange}
        style={{ width: '50%', marginLeft: '25%' }}
      />
    </>
  );
}
