/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
      },
      {
        protocol: 'https',
        hostname: 'img.championat.com',
      },
      {
        protocol: 'https',
        hostname: '**.yandex.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
      },
      {
        protocol: 'https',
        hostname: '**', // разрешить ВСЕ HTTPS домены
      },
      {
        protocol: 'https',
        hostname: 'ayla-diandrous-unobscenely.ngrok-free.dev',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'ayla-diandrous-unobscenely.ngrok-free.dev',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '157.230.138.217',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;