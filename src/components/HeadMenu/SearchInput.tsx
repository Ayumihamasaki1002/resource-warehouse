'use client';
import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Input, List } from 'antd';

import historyList from './handleSaved/history';

import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;

let historyArray: [string] = ['default'];

export default function SearchInput() {
  // 控制搜索提示显示
  const [show, setShow] = useState(false);

  const list = new historyList();

  useEffect(() => {
    // 历史记录存储
    if (localStorage.getItem('history') !== null) {
      list.replace(JSON.parse(localStorage.getItem('history') || '[]'));
    }
    getHistory();
  });

  // 从localStorage中获取历史记录
  const getHistory = function () {
    const history = localStorage.getItem('history');
    if (history === null) return false;
    // 将history转换为数组
    historyArray = JSON.parse(history || '[]');
    return true;
  };
  // 防抖处理
  let _value: string;
  let timer: NodeJS.Timeout;
  // 点击搜索按钮
  const onSearch: SearchProps['onSearch'] = (value) => {
    if (_value !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      _value = value;
      list.add(_value);
      // 将历史记录存入localStorage
      localStorage.setItem('history', JSON.stringify(list.get()));
      // 当token不同时要清除 还没实现
    }, 3000);
  };
  // 搜索框内容改变时
  const onChange: SearchProps['onChange'] = (e) => {
    getHistory();
    if (e.target.value == '') setShow(true);
    else setShow(false);
  };

  // 搜索框获得焦点时
  const onFocus: React.EventHandler<SyntheticEvent<HTMLInputElement>> = () => {
    const flag = getHistory() as React.SetStateAction<boolean>;
    setShow(flag);
  };
  // 搜索框失去焦点时
  const onBlur: React.EventHandler<SyntheticEvent<HTMLInputElement>> = () => {
    getHistory();
    setShow(false);
  };
  return show && historyArray[0] !== 'default' ? (
    <div style={{ width: '70%', marginLeft: '15%', display: 'Flex', flexDirection: 'column' }}>
      <Search
        style={{ width: '70%' }}
        placeholder="搜索~"
        onSearch={onSearch}
        onFocus={onFocus}
        onBlur={onBlur}
        enterButton
        onChange={onChange}
      />
      <List
        style={{ width: '70%', borderRadius: 0, backgroundColor: 'white', zIndex: 200 }}
        size="small"
        bordered
        dataSource={historyArray}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  ) : (
    <div style={{ width: '70%', marginLeft: '15%', display: 'Flex', flexDirection: 'column' }}>
      <Search
        style={{ width: '70%' }}
        placeholder="搜索~"
        onSearch={onSearch}
        onFocus={onFocus}
        enterButton
        onChange={onChange}
      />
    </div>
  );
}
