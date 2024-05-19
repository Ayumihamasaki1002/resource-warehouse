'use client';
import React, { useState } from 'react';

import { Typography, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';

import UserForm from './components/UserForm';

import { updateUserInfo } from '@/api/user';
import { client } from '@/config/oss';

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

  // 上传文件处理
  const onUpload = async (options: any) => {
    const { file } = options;
    const id = localStorage.getItem('id');
    const fileName = `user-avatar/${id}.${file.name.split('.')[1]}`;
    await client.put(fileName, file);
    await updateUserInfo({ avatar: fileName }); // 更新用户头像信息
  };
  // 限制图片上传的格式和大小
  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
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
            listType="picture-circle"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            customRequest={onUpload}
            beforeUpload={beforeUpload}
          >
            {fileList.length < 1 && '更换头像'}
          </Upload>
        </ImgCrop>
      </div>
    </div>
  );
}
