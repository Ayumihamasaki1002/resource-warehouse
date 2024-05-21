import React, { useRef, useState } from 'react';

import { Input, InputRef, Tooltip } from 'antd';

type Props = {
  width?: string;
  title: string;
  fontSize?: string;
  fontColor?: string;
  color?: string;
  textName: string;
  fontWeight?: string;
  lock?: boolean;
};

export default function InputOrDiv({
  width = '15%',
  title,
  fontSize = '16px',
  fontColor = '#388BFF',
  color = 'blue',
  textName,
  fontWeight = 'normal',
  lock = false,
}: Props) {
  const inputRef = useRef<InputRef>(null);
  const [modify, setModify] = useState<boolean>(false);
  const [name, setName] = useState<string>(textName);
  const modifyFileName = async () => {
    if (!lock) {
      await setModify(true); // 这里必须等setModify执行完毕再focus，否则会报错
      // 原因：setModify不是true的话input这个组件没有渲染出来，ref拿不到
      inputRef.current!.focus({
        cursor: 'end',
      });
    }
  };
  // 获取更改后的参数
  const onBlur = () => {
    if (!lock) setModify(false);
  };
  const titleStyles: React.CSSProperties = {
    color: fontColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    cursor: 'pointer',
  };
  return modify ? (
    <Input
      style={{ width: width }}
      value={name}
      onChange={(e) => setName(e.target.value)}
      onBlur={onBlur}
      ref={inputRef}
    />
  ) : (
    <h1 style={titleStyles} onClick={modifyFileName}>
      <Tooltip title={title} color={color}>
        {name}
      </Tooltip>
    </h1>
  );
}
