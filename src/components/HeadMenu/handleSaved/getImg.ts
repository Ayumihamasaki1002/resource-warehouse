import { client } from '@/config/oss';
export async function getImg(imgName: string) {
  const objectName = imgName;

  const url = client.signatureUrl(objectName, {
    method: 'GET', // 指定 HTTP 方法
    expires: 60 * 60 * 24, // URL 过期时间，单位为秒
  });

  return url;
}
