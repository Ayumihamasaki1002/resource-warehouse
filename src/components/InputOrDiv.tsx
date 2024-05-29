import React, { useRef, useState } from 'react';

import { Input, InputRef, Tooltip } from 'antd';

import { updateWarehouse } from '../api/warehouse';
import { updateHouseDetail } from '../api/warehouse/housedetail';

type Props = {
  width?: string;
  title: string;
  fontSize?: string;
  fontColor?: string;
  color?: string;
  textName: string;
  fontWeight?: string;
  updateInfo?: string;
  updateMode?: 'warehouse' | 'file' | 'newFile' | string;
};

export default function InputOrDiv({
  width = '15%',
  title,
  fontSize = '16px',
  fontColor = '#388BFF',
  color = 'blue',
  textName,
  fontWeight = 'normal',
  updateInfo,
  updateMode,
}: Props) {
  const inputRef = useRef<InputRef>(null);
  const [lock, setLock] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const [name, setName] = useState<string>(textName);
  const modifyFileName = async () => {
    if (lock) {
      await setModify(true); // 这里必须等setModify执行完毕再focus，否则会报错
      // 原因：setModify不是true的话input这个组件没有渲染出来，ref拿不到
      inputRef.current!.focus({
        cursor: 'end',
      });
      setLock(false);
    } else setLock(true);
  };
  // 获取更改后的参数
  const onBlur = () => {
    if (!lock) setModify(false);
    if (textName !== name) updateData(); // 名字改变时发送请求
  };
  // 跟新数据
  const updateData = () => {
    // 地址 新名字 id
    if (updateInfo) {
      // 暂时用于处理仓库名和文件名更新,可以改造为更通用的组件 (-fix-)
      if (updateMode === 'warehouse') updateWarehouse(updateInfo, name);
      else if (updateMode === 'file') updateHouseDetail(updateInfo, undefined, name);
      else if (updateMode === 'newFile') {
        setLock(true);
        modifyFileName();
      }
    }
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
