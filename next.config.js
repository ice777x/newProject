/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    fontLoaders: [{loader: "@next/font/google", options: {subsets: ["latin"]}}],
  },
  images: {
    domains: ["images.unsplash.com", "dummyjson.com", "via.placeholder.com"],
  },
};
