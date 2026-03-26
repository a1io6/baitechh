import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo";

export const metadata = generateCategoryMetadata({
  title: "Сетевое оборудование в Бишкеке",
  description:
    "Роутеры, коммутаторы, Wi-Fi и сетевое оборудование в Бишкеке для дома и бизнеса. Подбор и консультация.",
  keywords: ["роутер Бишкек", "сетевое оборудование Бишкек", "wifi оборудование Кыргызстан"],
  slug: "networking",
});

export default function NetworkingPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <article>
        <h1>Сетевое оборудование в Бишкеке</h1>
        <p>Решения для стабильной сети в офисе, магазине, складе и дома.</p>
        <p>
          Все позиции доступны в <Link href="/catalog">каталоге</Link>.
        </p>
      </article>
    </main>
  );
}
