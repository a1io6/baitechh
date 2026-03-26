export const dynamic = "force-static"
export default function sitemap() {
  const now = new Date()

  return [
    { url: "https://baitech.kg", priority: 1.0, changeFrequency: "weekly", lastModified: now },
    { url: "https://baitech.kg/catalog", priority: 0.95, changeFrequency: "daily", lastModified: now },
    { url: "https://baitech.kg/solution", priority: 0.8, changeFrequency: "weekly", lastModified: now },
    { url: "https://baitech.kg/catalog/cameras", priority: 0.95, changeFrequency: "daily", lastModified: now },
    { url: "https://baitech.kg/catalog/computers", priority: 0.85, changeFrequency: "daily", lastModified: now },
    { url: "https://baitech.kg/catalog/phones", priority: 0.85, changeFrequency: "daily", lastModified: now },
    { url: "https://baitech.kg/catalog/networking", priority: 0.85, changeFrequency: "daily", lastModified: now },
    { url: "https://baitech.kg/catalog/monitors", priority: 0.85, changeFrequency: "daily", lastModified: now },
  ]
}
