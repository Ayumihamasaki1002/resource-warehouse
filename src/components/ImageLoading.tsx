import React, { useState, useEffect } from 'react';

import { Skeleton, Avatar } from 'antd';
import { useRouter } from 'next/navigation';

interface ImageSrcProps {
  size: 'large' | 'small' | 'default' | number;
  src: string;
  url?: string;
  animate?: boolean; // (hover动画 -unfix-)
}

export default function ImageLoading({ src, size, url }: ImageSrcProps) {
  const [isLoading, setIsLoading] = useState(true); // 初始时设为正在加载
  const router = useRouter();
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

  // 处理图片可能存在的跳转(类型有问题待修改 -unfix-)
  const handlePush = (url?: string): any => {
    if (!url) return;
    router.push(url);
  };
  return (
    <div>
      {isLoading ? (
        <Skeleton.Avatar active size={size} />
      ) : (
        <Avatar size={size} src={src} onClick={url ? (e) => handlePush(url)(e) : undefined} />
      )}
    </div>
  );
}
