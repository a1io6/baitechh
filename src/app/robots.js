export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/checkout/",
          "/cart/",
          "/korzina",
          "/profile",
          "/login",
          "/register",
          "/forgot-password",
          "/resetpassword",
          "/reset-password-new",
          "/codeverify",
          "/add-product",
          "/camera",
          "/camera-catalog",
          "/edit-product",
          "/order-table",
          "/our-banner",
          "/resalts",
          "/setting-web",
          "/users-table",
        ],
      },
    ],
    host: "https://baitech.kg",
    sitemap: "https://baitech.kg/sitemap.xml",
  };
}
