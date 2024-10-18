/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'pix7.agoda.net',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
