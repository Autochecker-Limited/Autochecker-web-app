/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you’re on the /app router, this is default; safe to keep:
  experimental: {
    typedRoutes: true
  },
  // If you use images from external domains, add them here:
  // images: { remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }] },
};

module.exports = nextConfig;
