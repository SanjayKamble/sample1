/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/",
  swcMinify: true,
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
