/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['bff-images.bemypet.kr', 'www.tradingview.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
