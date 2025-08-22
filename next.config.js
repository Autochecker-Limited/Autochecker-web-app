/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',                 // produce /out for static hosting
    images: { unoptimized: true },    // required if you use next/image on static hosts
    experimental: {
        typedRoutes: true,
    },
    // Optional tweaks:
    // trailingSlash: true,           // if you prefer URLs ending with /
    // basePath: '',                  // set if hosting in a subfolder (e.g., '/app')
    // assetPrefix: '',               // set if serving assets from a CDN/subpath
};

module.exports = nextConfig;
