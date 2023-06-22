/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    env: {
    BASE_URL: process.env.NEXT_PUBLIC_SERVER,
  },
    images: {
        domains: ['firebasestorage.googleapis.com'],
      },
}

module.exports = nextConfig
