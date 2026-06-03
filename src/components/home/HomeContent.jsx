// components/HomeContent/HomeContent.jsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Banner } from '@/components/banner/Banner';
import Features from '@/components/features/Features';
import CatalogButton from '@/components/catalogbutton/CatalogButton';
import { Recommendations } from '@/components/recomendation/Recommendations';
import { News } from '@/components/News/News';

function HomeInner() {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('category');
  const hasCategoryPreview = Boolean(categoryName);

  return (
    <div>
      <Banner categoryName={categoryName} />
      {!hasCategoryPreview && <CatalogButton />}
      <Features categoryName={hasCategoryPreview ? categoryName : null} />
      <Recommendations categoryName={hasCategoryPreview ? categoryName : null} />
      <News />
    </div>
  );
}
export default function HomeContent() {
  return (
    <Suspense fallback={null}>
      <HomeInner />
    </Suspense>
  );
}