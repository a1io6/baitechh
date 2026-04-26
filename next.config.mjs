/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy/SEO links that should open catalog sections instead of 404.
      { source: "/cameras", destination: "/catalog/cameras", permanent: true },
      { source: "/video-surveillance", destination: "/catalog/cameras", permanent: true },
      { source: "/cameras-and-video-surveillance", destination: "/catalog/cameras", permanent: true },
      { source: "/kamery-i-videonablyudenie", destination: "/catalog/cameras", permanent: true },
      { source: "/камеры-и-видеонаблюдение", destination: "/catalog/cameras", permanent: true },

      { source: "/recommendations", destination: "/catalog", permanent: true },
      { source: "/rekomendatsii", destination: "/catalog", permanent: true },
      { source: "/рекомендации", destination: "/catalog", permanent: true },

      { source: "/similar-products", destination: "/catalog", permanent: true },
      { source: "/pokhozhie-tovary", destination: "/catalog", permanent: true },
      { source: "/похожие-товары", destination: "/catalog", permanent: true },

      { source: "/raspredelitelnaya-korobka", destination: "/catalog/networking", permanent: true },
      { source: "/распределительная-коробка", destination: "/catalog/networking", permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
      {
        protocol: "https",
        hostname: "img.championat.com",
      },
      {
        protocol: "https",
        hostname: "**.yandex.net",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
      {
        protocol: "https",
        // Allow all HTTPS domains for external images.
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "ayla-diandrous-unobscenely.ngrok-free.dev",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "157.230.138.217",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
