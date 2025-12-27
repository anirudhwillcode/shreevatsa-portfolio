/** @type {import('next').NextConfig} */
const nextConfig = {
  // static export output for Next 16 (replaces `next export`)
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
