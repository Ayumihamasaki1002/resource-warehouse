'use client';
// antd中的menu有点不好使，需要自己封装一个
import React from 'react';
type props = {
  color?: string;
  size?: string;
};
export default function Button(props: props) {
  const { color, size } = props;
  const ButtonStyle = {
    color: color || 'black',
    fontSize: size || '16px',
  };
  return <div style={ButtonStyle}>Button</div>;
}
