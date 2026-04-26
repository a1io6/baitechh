import { generateCategoryMetadata } from "@/lib/seo";
import CameraCatalogRedirectClient from "./CameraCatalogRedirectClient";

export const metadata = generateCategoryMetadata({
  title: "Камеры видеонаблюдения в Бишкеке",
  description:
    "Купить камеры видеонаблюдения в Бишкеке: IP-камеры, уличные и внутренние модели для дома и бизнеса. Консультация и установка под ключ.",
  keywords: [
    "камеры видеонаблюдения Бишкек",
    "ip камера Бишкек",
    "уличная камера видеонаблюдения",
    "видеонаблюдение Кыргызстан",
  ],
  slug: "cameras",
});

export default function CamerasPage() {
  return <CameraCatalogRedirectClient />;
}
