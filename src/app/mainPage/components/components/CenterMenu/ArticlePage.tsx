import React, { useState } from 'react';

import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Space } from 'antd';

import type Icon from '@ant-design/icons';

interface IconTextProps {
  icon: typeof Icon;
  text: React.ReactNode;
}
const listData = Array.from({ length: 4 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText: React.FC<IconTextProps> = ({ icon, text }) => (
  <>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </>
);

export default function ArticlePage() {
  const [loading] = useState(true);

  // const onChange = (checked: boolean) => {
  //   setLoading(!checked);
  // };

  return (
    <>
      <Space style={{ alignItems: 'start', marginTop: '1vh' }}>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={
                !loading
                  ? [
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]
                  : undefined
              }
              extra={
                !loading && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar style={{ width: '46vw' }} paragraph={{ rows: 4 }}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </Space>
    </>
  );
}
