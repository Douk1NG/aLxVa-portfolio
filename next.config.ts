import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
  trailingSlash: true,
}

export default nextConfig
