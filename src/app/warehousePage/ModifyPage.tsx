'use client';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-markdown-editor-lite';

import { Button, message } from 'antd';

import { updateUserInfo } from '@/api/user';
import { getSingleHouseDetail, updateHouseDetail } from '@/api/warehouse/housedetail';
import useWarehouseStore from '@/store/warehouse';
import 'react-markdown-editor-lite/lib/index.css';

export default function ModifyPage() {
  const titleStyles: React.CSSProperties = {
    color: '#388BFF',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  const topLineStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  };
  const { warehouseInfo, updateWarehouseInfo, facePage } = useWarehouseStore();
  const mdEditor = useRef(null);
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    if (warehouseInfo.fileId === 'facePage') setValue(facePage);
    else
      getSingleHouseDetail(warehouseInfo.warehouseId, warehouseInfo.fileId)
        .then((res) => res.json())
        .then((data) => {
          setValue(data.content);
          setName(data.name);
        });
  }, [warehouseInfo.fileId, warehouseInfo.warehouseId, facePage]);
  const handleEditorChange = ({ text }: { html: string; text: string }) => {
    // const newValue = text.replace(/\d/g, ''); 不明白为什么要把数字注掉
    const newValue = text;
    setValue(newValue);
  };

  // 保存功能
  const saveInfo = async () => {
    if (warehouseInfo.fileId === 'facePage') await updateUserInfo({ warehouseFacePage: value });
    else await updateHouseDetail(warehouseInfo.fileId, value, name);
    messageApi.info('保存成功！');
    // 保存成功后，更新仓库信息
    updateWarehouseInfo({
      warehouseId: warehouseInfo.warehouseId,
      fileId: warehouseInfo.fileId,
      flag: warehouseInfo.flag,
      fileName: name,
    });
  };

  // 渲染input或者name
  const renderInputOrName = () => {
    return <h1 style={titleStyles}>{name}</h1>;
  };

  return (
    <>
      {contextHolder}
      <div style={topLineStyles}>
        {/* 通过modifyFileName控制渲染这个div或者input */}
        {renderInputOrName()}
        <Button type="primary" onClick={saveInfo}>
          保存
        </Button>
      </div>
      <Editor
        ref={mdEditor}
        value={value}
        style={{
          height: '90%',
          width: '100%',
        }}
        onChange={handleEditorChange}
        renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
      />
    </>
  );
}
