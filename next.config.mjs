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
        hostname: 'img.championat.com', // ← добавьте этот домен
      },

      {
        protocol: 'https',
        hostname: '**.yandex.net', // разрешить все поддомены yandex.net
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
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'ayla-diandrous-unobscenely.ngrok-free.dev',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
