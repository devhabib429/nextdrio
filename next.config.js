/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
    unoptimized: true,
  },
};

module.exports = nextConfig;
