import OSS from 'ali-oss';

import { ACCESSKEYID, ACCESSKEYSECRET } from './Secret';
export const client = new OSS({
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: 'oss-cn-shenzhen',
  // 填写Bucket名称。
  bucket: 'img-soure',
  endpoint: 'oss-cn-shenzhen.aliyuncs.com', // 地域节点 --> 外网访问
  // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
  accessKeyId: ACCESSKEYID,
  accessKeySecret: ACCESSKEYSECRET,
  secure: false, // 是否使用https域名，默认为false
});
