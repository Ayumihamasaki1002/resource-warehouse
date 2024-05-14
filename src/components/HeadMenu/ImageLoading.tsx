import React, { useState, useEffect } from 'react';

import { Skeleton, Avatar } from 'antd';

interface ImageSrcProps {
  src: string;
}

export default function ImageLoading({ src }: ImageSrcProps) {
  const [isLoading, setIsLoading] = useState(true); // 初始时设为正在加载

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(false); // 图片加载完成后设为非加载状态
    };
    img.onerror = () => {
      setIsLoading(false); // 如果图片加载出错，也设为非加载状态
    };
    img.src = src;

    // 当组件卸载时，清除可能的内存泄漏
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]); // 依赖src，当src变化时重新加载图片

  return <div>{isLoading ? <Skeleton.Avatar active size="large" /> : <Avatar size="large" src={src} />}</div>;
}
