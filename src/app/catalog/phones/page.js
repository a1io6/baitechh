import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo";

export const metadata = generateCategoryMetadata({
  title: "Смартфоны и телефоны в Бишкеке",
  description:
    "Смартфоны в Бишкеке: iPhone, Samsung, Xiaomi и другие бренды. Гарантия и доставка по Кыргызстану.",
  keywords: ["смартфон Бишкек", "iPhone Бишкек", "Samsung Бишкек", "телефоны Кыргызстан"],
  slug: "phones",
});

export default function PhonesPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
      <article>
        <h1>Смартфоны и телефоны в Бишкеке</h1>
        <p>Выбирайте смартфоны с официальной гарантией и быстрой доставкой.</p>
        <p>
          Посмотреть все предложения в <Link href="/catalog">каталоге</Link>.
        </p>
      </article>
    </main>
  );
}
