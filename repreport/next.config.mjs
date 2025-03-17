/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    assetPrefix: process.env.NODE_ENV === '' ? '' : '',
    basePath: process.env.NODE_ENV === '' ? '' : '',
  };
  
  export default nextConfig;