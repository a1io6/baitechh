import ProductDetail from "@/components/product/ProductDetail";
import React from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://baitech.kg";
const PRODUCTS_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/products/products/`;
const FALLBACK_IDS = ["1", "2", "3"];

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      headers: { "ngrok-skip-browser-warning": "true" },
      cache: "no-store",
    });

    if (!response.ok) {
      return FALLBACK_IDS.map((id) => ({ id }));
    }

    const data = await response.json();
    const products = Array.isArray(data) ? data : data?.results || [];
    const params = products
      .filter((product) => product?.id !== undefined && product?.id !== null)
      .map((product) => ({ id: String(product.id) }));

    return params.length > 0 ? params : FALLBACK_IDS.map((id) => ({ id }));
  } catch {
    return FALLBACK_IDS.map((id) => ({ id }));
  }
}

export default function Page() {
  return (
    <>
      <ProductDetail />
    </>
  );
}