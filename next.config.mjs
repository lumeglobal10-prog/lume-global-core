/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_URL: '/api/v1',
    NEXT_PUBLIC_RENDER_URL: '/api/v1/render',
  },
};

export default nextConfig;
