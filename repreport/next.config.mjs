/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/repreport_nextjs/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/repreport_nextjs' : '',
  };
  
  export default nextConfig;