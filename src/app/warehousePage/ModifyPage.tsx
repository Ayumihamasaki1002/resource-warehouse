'use client';
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-markdown-editor-lite';

import { Button, message } from 'antd';

import { getSingleHouseDetail, updateHouseDetail } from '@/api/warehouse/housedetail';
import useWarehouseStore from '@/store/warehouse';

import 'react-markdown-editor-lite/lib/index.css';

export default function ModifyPage() {
  const titleStyles: React.CSSProperties = {
    color: '#388BFF',
    fontSize: '20px',
    fontWeight: 'bold',
  };
  const topLineStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  };
  const { warehouseInfo, updateWarehouseInfo } = useWarehouseStore();
  const mdEditor = useRef(null);
  const [value, setValue] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();
  const handleEditorChange = ({ text }: { html: string; text: string }) => {
    // const newValue = text.replace(/\d/g, ''); 不明白为什么要把数字注掉
    const newValue = text;
    setValue(newValue);
  };
  useEffect(() => {
    getSingleHouseDetail(warehouseInfo.warehouseId, warehouseInfo.fileId)
      .then((res) => res.json())
      .then((data) => {
        setValue(data.content);
      });
  }, [warehouseInfo.fileId, warehouseInfo.warehouseId]);

  const saveInfo = async () => {
    await updateHouseDetail(warehouseInfo.fileId, value);
    await messageApi.info('保存成功！');
    updateWarehouseInfo({ warehouseId: warehouseInfo.warehouseId, fileId: warehouseInfo.fileId, flag: 3 });
  };

  return (
    <>
      <div style={topLineStyles}>
        {contextHolder}
        <h1 style={titleStyles}>修改文档</h1>
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
