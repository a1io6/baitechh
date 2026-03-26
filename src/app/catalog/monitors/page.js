import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo";

export const metadata = generateCategoryMetadata({
  title: "Мониторы в Бишкеке",
  description:
    "Мониторы для офиса, дома и игр в Бишкеке. Подбор по диагонали, матрице и бюджету. Доставка по Кыргызстану.",
  keywords: ["мониторы Бишкек", "игровой монитор Бишкек", "купить монитор Кыргызстан"],
  slug: "monitors",
});

export default function MonitorsPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <article>
        <h1>Мониторы в Бишкеке</h1>
        <p>Широкий выбор моделей для работы, обучения и гейминга.</p>
        <p>
          Перейти в <Link href="/catalog">каталог мониторов и техники</Link>.
        </p>
      </article>
    </main>
  );
}
