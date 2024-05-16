'use client';
import React, { useState } from 'react';

import { Typography, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import UserForm from './components/UserForm';

import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export default function UserInput() {
  const inputStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    marginTop: '2%',
    marginLeft: '2%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
    padding: '4%',
  };
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div style={inputStyles}>
      <Typography.Title level={2} style={{ marginLeft: '5%', color: '#1668DC', marginBottom: '10%' }}>
        个人信息
      </Typography.Title>
      <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
        <UserForm />
        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-circle"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && '更换头像'}
          </Upload>
        </ImgCrop>
      </div>
    </div>
  );
}
