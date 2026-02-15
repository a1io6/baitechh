import EditProductClient from "./EditProductClient";

export const dynamicParams = false;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://157.230.138.217:3001";
const PRODUCTS_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/products/products/`;

export async function generateStaticParams() {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      headers: { "ngrok-skip-browser-warning": "true" },
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    const products = Array.isArray(data) ? data : data?.results || [];

    return products
      .filter((product) => product?.id !== undefined && product?.id !== null)
      .map((product) => ({ id: String(product.id) }));
  } catch {
    return [];
  }
}

export default function EditProductPage() {
  return <EditProductClient />;
}

