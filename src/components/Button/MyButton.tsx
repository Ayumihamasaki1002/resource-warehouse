'use client';
import React from 'react';

import { Button } from 'antd';

type props = {
  color?: string;
  size?: string;
  text?: string | number;
};
export default function MyButton(props: props) {
  const { text } = props;

  return <Button type="link">{text}</Button>;
}
