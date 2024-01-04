/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = nextConfig;
