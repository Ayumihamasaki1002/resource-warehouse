import React, { useEffect, useState } from 'react';

import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';

import InputOrDiv from '@/components/InputOrDiv';

import { getHouseLists } from '@/api/warehouse';
export default function MainPage() {
  // 仓库管理页面
  const [dataLists, setDataLists] = useState<any[]>([]);
  useEffect(() => {
    if (localStorage.getItem('id') !== null)
      getHouseLists(localStorage.getItem('id') as string)
        .then((res) => res.json())
        .then((data) => {
          setDataLists(data);
        });
  }, []);

  const titleStyles: React.CSSProperties = {
    color: '#388BFF',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  const MainPageStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };
  const ListStyles: React.CSSProperties = {
    marginTop: '2%',
  };
  const topStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };
  return (
    <div style={MainPageStyles}>
      <div style={topStyles}>
        <p style={titleStyles}>仓库管理</p>
        <Button type="primary">添加</Button>
      </div>

      {dataLists.map((i) => {
        return (
          <List
            style={ListStyles}
            key={i.id}
            header={
              <InputOrDiv
                title="点击修改仓库名称"
                textName={i.housename}
                fontSize="20px"
                fontWeight="bold"
              ></InputOrDiv>
            }
            bordered
            dataSource={i.files}
            renderItem={(item: { name: string; id: string }) => (
              <List.Item key={item.id} style={{ display: 'flex', flexDirection: 'row' }}>
                <InputOrDiv
                  title="点击修改文件名称"
                  textName={item.name}
                  fontSize="15px"
                  fontColor="black"
                ></InputOrDiv>
                <CloseCircleOutlined />
              </List.Item>
            )}
          />
        );
      })}
    </div>
  );
}
