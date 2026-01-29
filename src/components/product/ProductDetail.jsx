import React from "react";
import Breadcrumb from "./ui/Breadcrumb/Breadcrumb.jsx";
import ProductCard from "./ui/product-card/ProductCard.jsx";
import Description from "./ui/description/Description.jsx";
import ProductSpecs from "./ui/ProductSpecs/ProductSpecs.jsx";
import { PopularCard } from "../popularcard/PopularCard.jsx";

function ProductDetail() {
  return (
    <div style={{maxWidth:"1279px", margin:"0 auto"}}>
      <Breadcrumb
        items={[
          { label: "Главная", path: "/" },
          { label: "Личный кабинет", path: "/profile" },
          { label: "История заказов", path: "/orders" },
        ]}
      />
      <ProductCard/>
      <Description />
      <ProductSpecs />
      <PopularCard/>
    </div>
  );
}

export default ProductDetail;