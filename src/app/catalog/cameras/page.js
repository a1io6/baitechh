import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo";

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
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <article>
        <h1>Камеры видеонаблюдения в Бишкеке</h1>
        <p>
          Подбор камер для квартиры, дома, офиса и склада. Помогаем выбрать оборудование по задаче,
          бюджету и условиям монтажа.
        </p>
        <p>
          Посмотреть актуальные модели можно в{" "}
          <Link href="/catalog?category=%D0%9A%D0%B0%D0%BC%D0%B5%D1%80%D1%8B">каталоге камер</Link>.
        </p>
      </article>
    </main>
  );
}
