'use client';
import React from 'react';

import styled from 'styled-components';

// antd中的menu有点不好使，需要自己封装一个
type props = {
  color?: string;
  size?: string;
  text?: string | number;
};
export default function Button(props: props) {
  const { color, size, text } = props;

  const MyButton = styled.button`
    color: ${color} || white;
    font-size: ${size} || 16px;
    margin-right: 2vw;

    &:hover {
      color: #4090ff;
    }
  `;
  return <MyButton>{text}</MyButton>;
}
