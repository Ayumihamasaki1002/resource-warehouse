import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { Button, message } from 'antd';

import { getSingleHouseDetail } from '@/api/warehouse/housedetail/index';
import useWarehouseStore from '@/store/warehouse';
export default function WareHouse() {
  const { warehouseInfo, updateWarehouseInfo, facePage } = useWarehouseStore();
  const [messageApi, contextHolder] = message.useMessage();
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    if (warehouseInfo.fileId === 'facePage') setContent(facePage);
    else
      getSingleHouseDetail(warehouseInfo.warehouseId, warehouseInfo.fileId)
        .then((res) => res.json())
        .then((data) => {
          setContent(data.content);
        });
  }, [warehouseInfo.fileId, warehouseInfo.warehouseId, facePage]);
  // 复制
  const copy = async () => {
    await navigator.clipboard.writeText(content);
    messageApi.info('复制成功！');
  };
  // 修改
  const modify = () => {
    updateWarehouseInfo({
      warehouseId: warehouseInfo.warehouseId,
      fileId: warehouseInfo.fileId,
      flag: 2,
      fileName: warehouseInfo.fileName,
    });
  };
  return (
    <div style={{ display: 'Flex', flexDirection: 'column' }}>
      {contextHolder}
      <div
        style={{
          display: 'Flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '2%',
        }}
      >
        <Button style={{ width: '5vw' }} onClick={copy}>
          复制
        </Button>
        <Button style={{ width: '5vw' }} onClick={modify}>
          修改
        </Button>
      </div>
      <Markdown>{content}</Markdown>
    </div>
  );
}
