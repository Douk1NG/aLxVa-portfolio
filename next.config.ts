import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/aLxVa-portfolio',
  assetPrefix: '/aLxVa-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
