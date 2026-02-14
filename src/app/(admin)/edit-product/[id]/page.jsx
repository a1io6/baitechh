import EditProductClient from "./EditProductClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }];
}

export default function EditProductPage() {
  return <EditProductClient />;
}

