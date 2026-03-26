import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo";

export const metadata = generateCategoryMetadata({
  title: "Компьютеры и ноутбуки в Бишкеке",
  description:
    "Купить компьютеры и ноутбуки в Бишкеке для дома, офиса и учебы. Помощь с подбором конфигурации и доставкой.",
  keywords: ["ноутбуки Бишкек", "компьютеры Бишкек", "игровой ПК Бишкек"],
  slug: "computers",
});

export default function ComputersPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <article>
        <h1>Компьютеры и ноутбуки в Бишкеке</h1>
        <p>Актуальные модели для работы, учебы и игр с доставкой по Кыргызстану.</p>
        <p>
          Перейти в <Link href="/catalog">каталог техники</Link>.
        </p>
      </article>
    </main>
  );
}
