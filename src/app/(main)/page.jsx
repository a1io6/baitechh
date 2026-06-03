// app/page.jsx
import HomeContent from '@/components/home/HomeContent';
import '../globals.css'

export const metadata = {
  title: "Камеры и видеонаблюдение в Бишкеке",
  description: "Baitech: камеры видеонаблюдения, установка под ключ, сетевое оборудование и техника в Бишкеке. Доставка по Кыргызстану.",
  alternates: { canonical: "https://baitech.kg" },
};

export default function Home() {
  return <HomeContent />;
}