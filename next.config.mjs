/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.webwill.com https://webwill.vercel.app https://*.vercel.app http://localhost:3000",
          },
        ],
      },
    ]
  },
};

export default nextConfig;
