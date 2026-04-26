"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "@/lib/products/hooks/hooks";

const CAMERA_MATCHERS = ["камер", "видеонаблюд", "camera", "cctv", "видеокөз"];

const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

export default function CameraCatalogRedirectClient() {
  const router = useRouter();
  const { categories, isInitialLoading } = useProducts();

  useEffect(() => {
    if (isInitialLoading) return;

    const topCategories = (categories || []).filter((category) => category?.parent === null);

    const cameraCategory = topCategories.find((category) => {
      const normalizedName = normalizeText(category?.name);
      return CAMERA_MATCHERS.some((matcher) => normalizedName.includes(normalizeText(matcher)));
    });

    if (cameraCategory?.name) {
      router.replace(`/catalog?category=${encodeURIComponent(cameraCategory.name)}`);
      return;
    }

    router.replace("/catalog");
  }, [categories, isInitialLoading, router]);

  return null;
}
