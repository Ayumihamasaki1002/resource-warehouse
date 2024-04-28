import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //关闭严格模式
  sassOptions: {
    additionalData: '@import "@/app/styles/index.scss";',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', //图片资源的协议
        hostname: 'www.test.com', //图片资源的域名
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
