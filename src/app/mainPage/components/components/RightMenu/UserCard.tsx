'use client';
import React, { useState } from 'react';

import { Skeleton, Space } from 'antd';

import ImageLoading from '@/components/ImageLoading';

export default function UserCard() {
  const [active] = useState(true);
  const topCardStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '80%',
    marginLeft: '10%',
    height: '30%',
    marginTop: '8%',
    padding: '5%',
    borderRadius: '2%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
  };
  const otherAvatarStyles: React.CSSProperties = {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };
  const buttonStyles: React.CSSProperties = {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20vh',
  };
  return (
    <>
      <Space style={topCardStyles}>
        <ImageLoading
          size={80}
          src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/oss-demo.jpg?Expires=1715814540&OSSAccessKeyId=TMP.3KgTvpa7uE3wX2HkM4nBQyfqBx3Urp1qr6A97n3Rd4wri7TZXrudM436iewsr3UMzMw9kyqWzVM7gAG9RrGyWyaoQWUD4H&Signature=EYf90%2Bi0BPx0kbV5Zk6Yhy139Ok%3D"
          url="/userInfo"
        />

        <Space style={otherAvatarStyles}>
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/github.png?Expires=1715815369&OSSAccessKeyId=TMP.3KgTvpa7uE3wX2HkM4nBQyfqBx3Urp1qr6A97n3Rd4wri7TZXrudM436iewsr3UMzMw9kyqWzVM7gAG9RrGyWyaoQWUD4H&Signature=YjlaY9qGlCiW4aKLJTvBJ1Riwlg%3D"
            url="https://github.com/Ayumihamasaki1002"
          />
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/juejin.png?Expires=1715815327&OSSAccessKeyId=TMP.3KgTvpa7uE3wX2HkM4nBQyfqBx3Urp1qr6A97n3Rd4wri7TZXrudM436iewsr3UMzMw9kyqWzVM7gAG9RrGyWyaoQWUD4H&Signature=WqcYDCfI7bz1ROujptfbh0sF8xU%3D"
            url="https://juejin.cn/user/3444120689837150"
          />
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/csdn.png?Expires=1715815306&OSSAccessKeyId=TMP.3KgTvpa7uE3wX2HkM4nBQyfqBx3Urp1qr6A97n3Rd4wri7TZXrudM436iewsr3UMzMw9kyqWzVM7gAG9RrGyWyaoQWUD4H&Signature=XUR2MM4vHnoTY%2BcUb%2FaxBK5R4hY%3D"
            url="https://blog.csdn.net/m0_62211690?spm=1000.2115.3001.5343"
          />
        </Space>
        <Space style={buttonStyles}>
          <Skeleton.Button active={active} size={'default'} />
          <Skeleton.Button active={active} size={'default'} />
        </Space>
      </Space>
    </>
  );
}
