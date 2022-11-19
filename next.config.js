/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "dummyjson.com", "via.placeholder.com"],
  },
};
