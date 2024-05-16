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
          src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/oss-demo.jpg?Expires=1715867416&OSSAccessKeyId=TMP.3Kjt4TD6TE5VBFtWR58Cm4i6RgfLanQnCHS2mVVdKYKK2dkeNV7YVy6sxSX8sJLZkdaa4PYMKsqyNP1Pz6xgkZ3Ztextsd&Signature=FdBQjzjzncF3dxtpzKqBwxc6e7E%3D"
          url="/userInfo"
        />

        <Space style={otherAvatarStyles}>
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/github.png?Expires=1715867385&OSSAccessKeyId=TMP.3Kjt4TD6TE5VBFtWR58Cm4i6RgfLanQnCHS2mVVdKYKK2dkeNV7YVy6sxSX8sJLZkdaa4PYMKsqyNP1Pz6xgkZ3Ztextsd&Signature=rM8wu8uQHQEY%2FFwyPXnjTmuE2eo%3D"
            url="https://github.com/Ayumihamasaki1002"
          />
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/juejin.png?Expires=1715867406&OSSAccessKeyId=TMP.3Kjt4TD6TE5VBFtWR58Cm4i6RgfLanQnCHS2mVVdKYKK2dkeNV7YVy6sxSX8sJLZkdaa4PYMKsqyNP1Pz6xgkZ3Ztextsd&Signature=WveTL2xYl%2F8v6ZtHw8wn5S9aEak%3D"
            url="https://juejin.cn/user/3444120689837150"
          />
          <ImageLoading
            size={30}
            src="https://img-soure.oss-cn-shenzhen.aliyuncs.com/csdn.png?Expires=1715867331&OSSAccessKeyId=TMP.3Kjt4TD6TE5VBFtWR58Cm4i6RgfLanQnCHS2mVVdKYKK2dkeNV7YVy6sxSX8sJLZkdaa4PYMKsqyNP1Pz6xgkZ3Ztextsd&Signature=QSSZRAPT9x%2BelO2gr%2FcFM5vK7Q4%3D"
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
