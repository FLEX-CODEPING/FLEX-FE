/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: [
      'bff-images.bemypet.kr',
      'www.tradingview.com',
      '308b-203-249-127-39.ngrok-free.app',
      '4870-203-249-127-39.ngrok-free.app',
      '308b-203-249-127-39.ngrok-free.app',
      'opgg-com-image.akamaized.net',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '308b-203-249-127-39.ngrok-free.app',
        pathname: '/stock-symbol/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    instrumentationHook: true,
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
