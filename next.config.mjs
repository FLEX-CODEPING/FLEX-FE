/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: ['bff-images.bemypet.kr', 'www.tradingview.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
