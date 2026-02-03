// app/productdetail/[id]/page.jsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "./ui/Breadcrumb/Breadcrumb.jsx";
import ProductCard from "./ui/product-card/ProductCard.jsx";
import Description from "./ui/description/Description.jsx";
import ProductSpecs from "./ui/ProductSpecs/ProductSpecs.jsx";
import { PopularCard } from "../popularcard/PopularCard.jsx";

function ProductDetail() {
  const { id } = useParams(); // <-- берём id из URL

  return (
    <div className="p-[20px]" style={{ maxWidth: "1279px", margin: "0 auto" }}>
      <Breadcrumb
        items={[
          { label: "Главная", path: "/" },
          { label: "Информация", path: "" },
        ]}
      />
      <ProductCard productId={id} /> 
      <Description productId={id} />
      <ProductSpecs productId={id} />
      <PopularCard  productId={id} />
    </div>
  );
}

export default ProductDetail;