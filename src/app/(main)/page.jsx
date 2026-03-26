import { Banner } from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import { Recommendations } from "@/components/recomendation/Recommendations";
import { News } from "@/components/News/News";
import '../globals.css'
import CatalogButton from "@/components/catalogbutton/CatalogButton";
import FloatingButton from "@/components/handlClick/HandleClick";

export const metadata = {
  title: "Камеры и видеонаблюдение в Бишкеке",
  description:
    "Baitech: камеры видеонаблюдения, установка под ключ, сетевое оборудование и техника в Бишкеке. Доставка по Кыргызстану.",
  alternates: { canonical: "https://baitech.kg" },
};

export default function Home() {
  return (
    <div className="">
      <FloatingButton/>
      <Banner/>
      <Features/>
      <CatalogButton/>
      <Recommendations/>
      <News/> 
      {/* <CorporateBlock/> */}
    </div>
  );
}
