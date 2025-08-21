/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["img.sakneen.com"],
  },

  experimental: {
    optimizePackageImports: ["@reduxjs/toolkit", "react-redux", "lucide-react"],
  },

  poweredByHeader: false,
};

module.exports = nextConfig;
